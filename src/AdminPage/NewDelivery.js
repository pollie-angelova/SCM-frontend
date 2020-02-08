import React from 'react'
import { connect } from 'react-redux'
import { Input, Form, Button } from 'semantic-ui-react'
import { deliveryActions } from '../_actions/delivery.actions';
import { getGoogleMaps } from '../_helpers';
import { deliveryControlActions } from '../_actions/deliverycontrol.actions';

class NewDelivery extends React.Component {

    state = {
        sender: null,
        recepient: null,
        driver: null,
        source: null,
        destination: null,
        weight: 0,
    }

    componentDidMount() {
        getGoogleMaps();
    }

    availableDrivers = () => this.props.availableDrivers.map(driver => ({
        key: driver.id,
        value: driver.id,
        text: driver.name
    }));

    availableUsers = () => this.props.users.map(user => ({
        key: user.id,
        value: user.id,
        text: user.name
    }));

    availableSources = () => this.props.availableSources.map(source => ({
        key: source.id,
        text: source.name,
        value: source.coordinates.join(','),
    }))

    availableDestinations = () => this.props.availableDestinations.map(source => ({
        key: source.id,
        text: source.name,
        value: source.coordinates.join(','),
    }))

    isCreateEnabled = () => {
        return (this.state.sender && this.state.recepient && this.state.driver && this.state.weight && this.state.source && this.state.destination)
    }

    isCalculateEnabled = () => {
        return (this.state.source && this.state.destination)
    }

    onLocationChange = (e, { name, value }) => {
        this.setState({ [name]: value.split(',') });
    }

    calculatePrice = () => {

        const [sourceLat, sourceLon] = this.state.source
        const [destLat, destLon] = this.state.destination
        const weight = parseFloat(this.state.weight)

        const source = new window.google.maps.LatLng(sourceLat, sourceLon);
        const destination = new window.google.maps.LatLng(destLat, destLon);

        const calculateTransitDuration = (response, status) => {
            if (status === 'OK') {
                const { distance, duration } = response.rows[0].elements[0];
                this.props.dispatch(deliveryActions.getDeliveryPrice(distance.value, duration.value, weight * 1000));
            } else {
                console.error(`Transit duration request failed due to ${status}`);
            }
        }

        const distanceMatrixService = new window.google.maps.DistanceMatrixService();
        distanceMatrixService.getDistanceMatrix({
            origins: [source],
            destinations: [destination],
            travelMode: 'DRIVING',
            avoidHighways: false,
            avoidTolls: true,
        }, calculateTransitDuration);

    }

    createDelivery() {
        const { sender, recepient, driver, source, destination, weight } = this.state;
        this.props.dispatch(deliveryControlActions.createNewDelivery({
            sender,
            recepient,
            driver,
            source,
            destination,
            weight,
        }));
    }

    render() {

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Dropdown fluid selection
                        label='Sender'
                        placeholder='Select sender'
                        options={this.availableUsers()}
                        onChange={(e, { value }) => this.setState({ sender: value })} />
                    <Form.Dropdown fluid selection
                        label='Recepient'
                        placeholder='Select recepient'
                        options={this.availableUsers()}
                        onChange={(e, { value }) => this.setState({ recepient: value })} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Dropdown fluid selection
                        label='Source'
                        name='source'
                        placeholder='Select source'
                        options={this.availableSources()}
                        onChange={this.onLocationChange.bind(this)} />
                    <Form.Dropdown fluid selection
                        label='Destination'
                        name='destination'
                        placeholder='Select destination'
                        options={this.availableDestinations()}
                        onChange={this.onLocationChange.bind(this)} />
                </Form.Group>
                <Form.Field>
                    <label>Weight</label>
                    <Input
                        label={{ basic: true, content: 'kg' }}
                        labelPosition='right'
                        placeholder='Enter weight...'
                        onChange={(e, { value }) => this.setState({ weight: value })} />
                </Form.Field>
                <Form.Group widths='equal'>
                    <Form.Input label='Price' placeholder='Price' readOnly value={NewDelivery.formatPrice(this.props.price)} />
                    <Form.Input label='Time' placeholder='Time' readOnly value={NewDelivery.formatDuration(this.props.duration)} />
                </Form.Group>
                <Form.Field>
                    <Form.Dropdown fluid selection
                        label='Driver'
                        placeholder='Select driver'
                        options={this.availableDrivers()}
                        onChange={(e, { value }) => this.setState({ driver: value })} />
                </Form.Field>
                <Button type='add' onClick={this.calculatePrice.bind(this)} disabled={!this.isCalculateEnabled()}>Calculate</Button>
                <Button type='add' onClick={this.createDelivery.bind(this)} disabled={!this.isCreateEnabled()}>Create</Button>
            </Form>

        );

    }

    static formatDuration = (value) => {
        return value > 0 ? Math.ceil(value) : ''
    }

    static formatPrice = (value) => {
        return value > 0 ? (Math.round(value * 100) / 100) : ''
    }
}

function mapStateToProps(state) {

    const { user, delivery } = state
    return {
        users: user.users,
        availableDrivers: user.availableDrivers,
        availableSources: delivery.availableSources,
        availableDestinations: delivery.availableDestinations,
        price: delivery.price,
        duration: delivery.duration,
    }
}

const connectedNewDelivery = connect(mapStateToProps)(NewDelivery)
export { connectedNewDelivery as NewDelivery }

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Header, Page, Footer } from '../_components'
import { MapContainer } from '../_components'
import './CalculateDeliveryPage.less'
import { deliveryActions } from '../_actions/delivery.actions'

class CalculateDeliveryPage extends React.Component {

    state = {
        selectedSource: null,
        selectedDestination: null,
    }

    componentDidMount() {
        this.props.dispatch(deliveryActions.getAvailableSources());
        this.props.dispatch(deliveryActions.getAvailableDestinations());
    }

    availableSourcesOptions() {
        return this.props.availableSources.map(source => ({
            key: source.id,
            text: source.name,
            value: source.coordinates.join(','),
        }))
    }

    availableDestinationsOptions() {
        return this.props.availableDestinations.map(dest => ({
            key: dest.id,
            text: dest.name,
            value: dest.coordinates.join(','),
        }))
    }

    onSourceChange(e, data) {
        const [lat, lon] = data.value.split(',');
        this.setState({ selectedSource: {lat, lon} });
    }

    onDestinationChange(e, data) {
        const [lat, lon] = data.value.split(',');
        this.setState({ selectedDestination: {lat, lon} });
    }

    onCalculate() {
        if (this.state.selectedSource && this.state.selectedDestination) {
            console.log(this.state.selectedSource);
            console.log(this.state.selectedDestination);
            // TODO
        }
    }

    render() {
        return (
            <Page clasName='page'>
                <Header />
                <div className="calculate_form">
                    <Segment placeholder >
                    <h2 > Delivery Calculator</h2>
                        <Grid columns={2} stretched>
                            <Grid.Column verticalAlign='middle' width={6}>
                                <Form>
                                    <Form.Dropdown placeholder='Select address'
                                        fluid
                                        selection
                                        options={this.availableSourcesOptions()}
                                        onChange={this.onSourceChange.bind(this)}
                                        label='Source Address:' />
                                    <Form.Dropdown placeholder='Select address'
                                        fluid
                                        selection
                                        options={this.availableDestinationsOptions()}
                                        onChange={this.onDestinationChange.bind(this)}
                                        label='Destination Address:' />
                                    <Button content='Calculate' onClick={this.onCalculate.bind(this)} />
                                </Form>
                            </Grid.Column>

                            <Grid.Column verticalAlign='middle' width={10}>
                                <div className='calculate_map'>
                                    <MapContainer selectedSource />
                                </div>
                            </Grid.Column>

                        </Grid>
                    </Segment>
                </div>
                <Footer />
            </Page>
        )
    }
}

CalculateDeliveryPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const { availableSources, availableDestinations } = state.delivery;
    return {
        availableSources,
        availableDestinations
    }
}


const connectedCalculateDeliveryPage = connect(mapStateToProps)(CalculateDeliveryPage)
export { connectedCalculateDeliveryPage as CalculateDeliveryPage }

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Grid, Segment, Form } from 'semantic-ui-react'
import { Header, Page, Footer } from '../_components'
import { MapContainer } from '../_components'
import './CalculateDeliveryPage.less'
import { deliveryActions } from '../_actions/delivery.actions'
//import { deliveryConstants } from '../_constants'

class CalculateDeliveryPage extends React.Component {

    map = null;

    state = {
        selectedSource: null,
        selectedDestination: null,
        price: 0,
        duration: 0,
    }

    componentDidMount() {
        this.props.dispatch(deliveryActions.getAvailableSources());
        this.props.dispatch(deliveryActions.getAvailableDestinations());
    }

    setMapReference(element) {
        this.map = element;
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

    handleClick() {

        if (this.state.selectedSource && this.state.selectedDestination) {

            const map = new window.google.maps.Map(this.map, {
                zoom: 6
            });

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            const [sourceLat, sourceLon] = this.state.selectedSource;
            const [destLat, destLon] = this.state.selectedDestination;

            const source = new window.google.maps.LatLng(sourceLat, sourceLon);
            const destination = new window.google.maps.LatLng(destLat, destLon);

            const request = {
                origin: source,
                destination: destination,
                travelMode: window.google.maps.TravelMode['DRIVING']
            };

            directionsService.route(request, function (result, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(result);
                } else {
                    console.error(`Directions request failed due to ${status}`);
                }
            });

            const calculateTransitDuration = (response, status) => {

                if (status === 'OK') {

                    // const origins = response.originAddresses;
                    // const destinations = response.destinationAddresses;

                    const { distance, duration } = response.rows[0].elements[0];
                    this.props.dispatch(deliveryActions.getDeliveryPrice(distance.value, duration.value));


                    // for (var i = 0; i < origins.length; i++) {
                    //     var results = response.rows[i].elements;
                    //     for (var j = 0; j < results.length; j++) {
                    //         var element = results[j];
                    //         var distance = element.distance.text;
                    //         var duration = element.duration.text;
                    //         var from = origins[i];
                    //         var to = destinations[j];
                    //     }
                    // }
                } else {
                    console.error(`Transit duration request failed due to ${status}`);
                }

                // console.log(element.duration.text)

            }

            const distanceMatrixService = new window.google.maps.DistanceMatrixService();
            distanceMatrixService.getDistanceMatrix({
                origins: [source],
                destinations: [destination],
                travelMode: 'DRIVING',
                avoidHighways: false,
                avoidTolls: true,
            }, calculateTransitDuration);

        directionsRenderer.setMap(map);
    }

}

onSourceChange(e, data) {
    this.setState({ selectedSource: data.value.split(',') });
}

onDestinationChange(e, data) {
    this.setState({ selectedDestination: data.value.split(',') });
}

displayPrice() {
    return (<div>
        <p>{Math.ceil(this.props.duration)}</p>
        <p>{(Math.round(this.props.price * 100) / 100)}</p>
    </div>)
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
                                <Button content='Calculate' onClick={this.handleClick.bind(this)} />
                                { this.props.price > 0 && this.props.duration>0 && this.displayPrice() }


                            </Form>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle' width={10}>
                            <div className='calculate_map'>
                                <MapContainer mapReference={this.setMapReference.bind(this)} />
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
    const { 
        price, 
        availableSources, 
        availableDestinations,
        duration,
    } = state.delivery;
    return {
        availableSources,
        availableDestinations,
        price,
        duration
    }
}


const connectedCalculateDeliveryPage = connect(mapStateToProps)(CalculateDeliveryPage)
export { connectedCalculateDeliveryPage as CalculateDeliveryPage }

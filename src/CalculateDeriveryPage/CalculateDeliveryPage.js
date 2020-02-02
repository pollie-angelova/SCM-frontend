import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { Header, Page, Footer } from '../_components'
import { MapContainer } from '../_components'
import { Dropdown } from 'semantic-ui-react'
import './CalculateDeliveryPage.less'

const options = [
    { key: 1, text: 'Sofia', value:[42.698334, 23.319941] },
    { key: 2, text: 'Plovdiv', value: [42.136097, 24.742168] },
    { key: 3, text: 'Varna', value: [43.204666, 27.910543] },
    { key: 4, text: 'Burgas', value: [42.510578, 27.461014] },
]


class CalculateDeliveryPage extends React.Component {

    handleChange(){
       // $('#source-dd').dropdown('get text');
    }

    handleClick() {

        const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 6
        });

        var directionsService = new window.google.maps.DirectionsService();
            var directionsRenderer = new window.google.maps.DirectionsRenderer();

            const source = new window.google.maps.LatLng( 42.510578, 27.461014 );
            const destination = new window.google.maps.LatLng( 43.204666, 27.910543);


            var request = {
                origin: source,
                destination:  destination,
                travelMode: window.google.maps.TravelMode['DRIVING']
            };


            directionsService.route(request, function (result, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(result);
                }else {
                    window.alert('Directions request failed due to ' + status);
                  }
            });

            directionsRenderer.setMap(map);

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
                                <h4> Source:</h4>
                                <Dropdown id ="source-dd" clearable options={options} selection onChange={this.handleChange} />
                                <h4> Destination:</h4>
                                <Dropdown id='destination-dd' clearable options={options} selection />
                                <br/>
                                <Button content='Calculate' onClick={this.handleClick} />
                            </Grid.Column>

                            <Grid.Column verticalAlign='middle' width={10}>
                                <div className='calculate_map'>
                                    <MapContainer />
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
    return {}
}


const connectedCalculateDeliveryPage = connect(mapStateToProps)(CalculateDeliveryPage)
export { connectedCalculateDeliveryPage as CalculateDeliveryPage }

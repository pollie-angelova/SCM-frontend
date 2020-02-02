import React from 'react';
import './Map.less';
//import GoogleMapReact from 'google-map-react';

export class MapContainer extends React.Component {


    getGoogleMaps() {
        // If we haven't already defined the promise, define it
        if (!this.googleMapsPromise) {
            this.googleMapsPromise = new Promise((resolve) => {
                // Add a global handler for when the API finishes loading
                window.resolveGoogleMapsPromise = () => {
                    // Resolve the promise
                    resolve(window.google);

                    // Tidy up
                    delete window.resolveGoogleMapsPromise;
                };

                // Load the Google Maps API
                const script = document.createElement("script");
                const API = 'AIzaSyCXMiOHzz13PmiVlqXo34pYsi6hBrT98vY';
                script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
                script.async = true;
                document.body.appendChild(script);
            });
        }

        // Return a promise for the Google Maps API
        return this.googleMapsPromise;
    }

    componentWillMount() {
        // Start Google Maps API loading since we know we'll soon need it
        this.getGoogleMaps();
    }

    componentDidMount() {
        // Once the Google Maps API has finished loading, initialize the map
        this.getGoogleMaps().then((google) => {

            const center = { lat: 42.698334, lng: 23.319941 }

            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 6,
                center: center
            });

            // var directionsService = new google.maps.DirectionsService();
            // var directionsRenderer = new google.maps.DirectionsRenderer();
            // const source = new google.maps.LatLng( 42.510578, 27.461014 );
            // const destination = new google.maps.LatLng( 43.204666, 27.910543);


            // var request = {
            //     origin: source,
            //     destination:  destination,
            //     travelMode: google.maps.TravelMode['DRIVING']
            // };


            // directionsService.route(request, function (result, status) {
            //     if (status === 'OK') {
            //         directionsRenderer.setDirections(result);
            //     }else {
            //         window.alert('Directions request failed due to ' + status);
            //       }
            // });

            // directionsRenderer.setMap(map);

        });
    };

    render() {
        return (
            <div>
                <div id="map"  ></div>
            </div>
        )


    }
}


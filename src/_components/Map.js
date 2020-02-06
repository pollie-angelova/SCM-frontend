import React from 'react';
import PropTypes from 'prop-types'
import './Map.less';

export class MapContainer extends React.Component {

    map = null;
    googleMapsPromise = null;

    getGoogleMaps() {

        if (window.google) {
            return Promise.resolve(window.google);
        }

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

    componentDidMount() {

        // Once the Google Maps API has finished loading, initialize the map
        this.getGoogleMaps().then((google) => {

            const center = { lat: 42.698334, lng: 23.319941 }

            const map = new window.google.maps.Map(this.map, {
                zoom: 6,
                center: center
            });

        });
    };

    setMapReference(element) {
        this.map = element;
        if (this.props.mapReference) {
            this.props.mapReference(element);
        }
    }

    render() {
        return (
            <div>
                <div id='map' ref={this.setMapReference.bind(this)} />
            </div>
        )


    }
}

MapContainer.propTypes = {
    mapReference: PropTypes.func.isRequired
};


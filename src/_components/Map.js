import React from 'react';
import PropTypes from 'prop-types'
import './Map.less';
import { getGoogleMaps } from '../_helpers';

export class MapContainer extends React.Component {

    map = null;

    componentDidMount() {

        // Once the Google Maps API has finished loading, initialize the map
        getGoogleMaps().then((google) => {
            const center = { lat: 42.698334, lng: 23.319941 }
            new window.google.maps.Map(this.map, { zoom: 6, center: center });
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


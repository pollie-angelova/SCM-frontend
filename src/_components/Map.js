import React from 'react';
import GoogleMapReact from 'google-map-react';

export class MapContainer extends React.Component {

    static defaultProps = {
        center: {
            lat: 42.6882482,
            lng: 23.34457
        },
        zoom: 18
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCXMiOHzz13PmiVlqXo34pYsi6hBrT98vY' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
            </GoogleMapReact>
        );
    }
}

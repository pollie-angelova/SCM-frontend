// import React from 'react'
// import './Map.less'

// export class Map extends React.Component {

//     initMap = () => {

//         // Create A Map;
//         var map = new window.google.maps.Map(document.getElementById('map'), {
//             center: { lat: -34.397, lng: 150.644 },
//             zoom: 1
//         });

//         //Create Marker
//         var marker = new window.google.maps.Marker({
//             position: { lat: -34.397, lng: 150.644 },
//             map: map
//           });
//     }


//     // renderMap = () => {
//     //     "https://maps.googleapis.com/maps/api/js?key=AIzaSyCXMiOHzz13PmiVlqXo34pYsi6hBrT98vY&callback=initMap")
//     //     window.initMap = this.initMap
//     // }

//         render(){
//             return (
//                 <div>
//                 <div id="map" > </div>
//                 <script async defer
//                 src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXMiOHzz13PmiVlqXo34pYsi6hBrT98vY&callback=initMap"> </script>
//                 </div>
//             );
//         }
//     }



// // function loadScript(url) {
// //     // var index = window.document.getElementsByTagName("script")[0]
// //     // var script = window.document.createElement("script")
// //     script.src = url
// //     script.async = true
// //     script.defer = true
// //     index.parentNode.insertBefore(script, index)
// // }

// export default Map;

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

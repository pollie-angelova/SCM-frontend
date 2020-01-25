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
import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
  };

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            >
                <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCXMiOHzz13PmiVlqXo34pYsi6hBrT98vY"
  })(MapContainer);
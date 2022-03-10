import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <i className="fa-solid fa-map-marker-alt fa-3x" />;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <>
        <div style={{ height: '30vh', width: '30vw' }}>
          <GoogleMapReact
            // change key to your API key
            bootstrapURLKeys={{ key: 'AIzaSyBiQq5Z8o8i2sbzKNIitbGVQ27bWWuw23I' }}
            defaultCenter={{
              lat: this.props.lat,
              lng: this.props.lng
            }}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.props.lat}
              lng={this.props.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default SimpleMap;

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
        <div style={{ height: '35vh', width: '35vw', marginRight: '1vw' }}>
          <GoogleMapReact
            // change key to your API key
            bootstrapURLKeys={{ key: process.env.REACT_APP_GEOCODE_API_KEY }}
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

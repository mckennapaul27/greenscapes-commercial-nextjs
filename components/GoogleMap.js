import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => {
    return (
        <div style={{maxWidth: '10px'}}>            
            <figure className="image is-96x96">
                <img src="/images/logo-x.png" />
            </figure>
        </div>
        
    )
}
   
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.363880,
      lng: -2.151820
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBSbNGSoHm2Q9fve8ltO7COoAjZLPE5Fj0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={53.363880}
            lng={-2.151820}
            text={'Greenscapes Commercial'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
import React from 'react'
import GoogleMapReact from 'google-map-react'

const SimpleMap = ({
  lat = 20.21117931562221,
  lng = -87.46819204049757,
  zoom = 15
}) => {
  const defaultProps = {
    center: { lat, lng },
    zoom
  }

  return (
    <div style={{ height: '30rem', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAS9nkwwXLeArnrlQyFtQKP3J-hSsxs0lg' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  )
}

export default SimpleMap

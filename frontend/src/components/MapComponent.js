import React,{useState, useEffect} from 'react';
import { listRestaurants } from '../actions/restaurantActions'
import { useDispatch, useSelector } from 'react-redux'
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapComponent() {
 const [viewState, setViewState] = useState({
        latitude: -6.677,    
        longitude: 146.677,   
        zoom: 10
    });


return (
  <>
    <Map
      {...viewState}
      onMove={event => setViewState(event.viewState)}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    > 
      
            <Marker longitude={167.677} latitude={-6.677} anchor="bottom">
              <img className='mapbox-icon' src="/images/mapbox.png" />
            </Marker> 
     

    </Map>
 
     </>
  );
}

export default MapComponent;


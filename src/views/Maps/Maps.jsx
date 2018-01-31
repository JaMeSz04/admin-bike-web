import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';


class Maps extends Component{
    render() {
        return (
            <div id="map">
                <Map
                    style={{width: '82vw', height: '95vh', position: 'relative'}}
                    google={this.props.google}
                    initialCenter={{lat : 13.729869, lng : 100.776333}}
                    zoom={16}
                    clickableIcons={false}
                >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                    />
                    <Polygon
                        paths={[
                            { lat : 13.731714, lng : 100.781969 },
                            { lat : 13.730602, lng : 100.781931 },
                            { lat : 13.730560, lng : 100.779232 },
                            { lat : 13.729549, lng : 100.778158 },
                            { lat : 13.728560, lng : 100.777956 },
                            { lat : 13.728404, lng : 100.771071 },
                            { lat : 13.730985, lng : 100.770996 },
                            { lat : 13.731650, lng : 100.771719 },
                            { lat : 13.731714, lng : 100.781969 }
                        ]}
                        strokeColor="#009688"
                        strokeOpacity={0.8}
                        strokeWeight={3}

                        fillOpacity={0.35} />
                </Map>
            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBEg_2pjO8vwhRR-PQw2Dacon_j_bHcrBk"
})(Maps)

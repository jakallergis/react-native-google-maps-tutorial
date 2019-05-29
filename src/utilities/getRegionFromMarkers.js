/**
 * Created by Giannis Kallergis on 2019-05-24
 * @flow
 */

/** Models / Types */
import type { LatLng, Region } from 'react-native-maps';

export default function _getRegionFromMarkers(markers: LatLng[] = [], delta: number = 0.025, offset: number = 1.3): Region {
  let minLat = 0, maxLat = 0, minLng = 0, maxLng = 0;
  for (let i = 0, { length } = markers; i < length; i++) {
    const marker = markers[i];
    if (i === 0) {
      minLat = marker.latitude;
      maxLat = marker.latitude;
      minLng = marker.longitude;
      maxLng = marker.longitude;
      continue;
    }
    if (marker.latitude <= minLat) minLat = marker.latitude;
    if (marker.latitude >= maxLat) maxLat = marker.latitude;
    if (marker.longitude <= minLng) minLng = marker.longitude;
    if (marker.longitude >= maxLng) maxLng = marker.longitude;
  }
  const latitude = (minLat + maxLat) / 2;
  const longitude = (minLng + maxLng) / 2;
  const latDelta = (Math.abs(minLat - maxLat) || delta) * offset;
  const lngDelta = (Math.abs(minLng - maxLng) || delta) * offset;
  return { latitude, longitude, latitudeDelta: latDelta, longitudeDelta: lngDelta };
}
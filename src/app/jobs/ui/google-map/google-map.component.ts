import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { reverseGeocodingApiKey } from '../../data-access/services/job-api.service';

import { mapStyles } from './googleMap.styles';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {

  apiLoaded: Observable<boolean>;

  @Input() center: google.maps.LatLngLiteral | null = null;
  @Input() width: string = '100%'
  @Input() height: string = '100%'

  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    mapTypeControlOptions: { mapTypeIds: [] },
    zoom: 13,
    styles: mapStyles
  };

  markerOptions: google.maps.MarkerOptions = {
    icon: {
      path: "M26 11.7C26 5.23827 20.1797 0 13 0C5.8203 0 0 5.23827 0 11.7C0 15.8164 3.95671 23.3953 11.8701 34.4368L13 36L14.6756 33.6721L15.2347 32.8813C22.4116 22.6805 26 15.6201 26 11.7ZM6.5 12.5217C6.5 9.06396 9.41015 6.26087 13 6.26087C16.5899 6.26087 19.5 9.06396 19.5 12.5217C19.5 15.9795 16.5899 18.7826 13 18.7826C9.41015 18.7826 6.5 15.9795 6.5 12.5217Z",
      fillColor: "#D8D8D8",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 1,

    }
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${reverseGeocodingApiKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

}

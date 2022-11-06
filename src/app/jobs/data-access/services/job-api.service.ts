import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable, of, switchMap, toArray, zip } from 'rxjs';
import { JobInterface } from '../models/job.model';
import { LocationInterface } from '../models/location.model';

//in anyway api keys are visible
const apiUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
const authToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

//for reverse geocoding
export const reverseGeocodingApiKey = 'AIzaSyCqoIx0C5PIpBRs8Sf-TeeHSpmwMgMgJKQ';


@Injectable({
  providedIn: 'root'
})
export class JobApiService {

  constructor(private http: HttpClient) { }

  getJobBoard(): Observable<JobInterface[]> {

    return this.getAllJobs().pipe(
      switchMap((jobs: JobInterface[]) => jobs),
      mergeMap((job: JobInterface) =>
        zip(
          // concatenating observables
          of(job),
          this.getAddress(job.location)
        )
          .pipe(map((x: any) => {
            // constructing our object
            return { ...x[0], locationName: x[1].results[0].formatted_address }
          })),
        10 //concurrent requests for mergeMap
      ),
      toArray() // when all results are built emit one result
    )

  }

  //the main api
  getAllJobs(): Observable<JobInterface[]> {
    return this.http.get<JobInterface[]>(apiUrl, {
      headers: {
        authorization:
          `Bearer ${authToken}`
      }
    })
  }

  // reverse geocoding
  // ideally should be some real type
  getAddress(location: LocationInterface): Observable<unknown> {
    //maybe there is a better api for the cases, 
    //especially counting that by Google Policies you can't store info 
    //about maps in the way of lat,long - city or only in a very limited way.

    return this.http.get<unknown>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${reverseGeocodingApiKey}`
    )

  }

}

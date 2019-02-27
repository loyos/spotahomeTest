import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotaroomService {

  private propertyType = new BehaviorSubject<any>('all');
  propertyTypeObs = this.propertyType.asObservable();

  private sortType = new BehaviorSubject<any>('ascending');
  sortTypeObs = this.sortType.asObservable();

  private list = new BehaviorSubject<any>({});
  listObs = this.list.asObservable();

  urlMarkers = 'https://www.spotahome.com/api/public/listings/search/markers/';
  urlHomecards = 'https://www.spotahome.com/api/public/listings/search/homecards_ids?';

  constructor(private http: HttpClient) { }


  getPropertiesId(type: string, city: string) {
    let url = '';
    if (type === 'all') {
      url = this.urlMarkers + city;
    } else {
      url = this.urlMarkers + city + '?type[]=' + type;
    }

    return this.http.get(url)
      .pipe(
        catchError(this.handleError('getRooms', []))
      );
  }

  getPropertyInfo(paramsId: string) {
    return this.http.get(this.urlHomecards + paramsId)
      .pipe(
        catchError(this.handleError('getRooms', []))
      );
  }

  mapIds(ids: any) {
    let paramsId = '';
    ids = ids.slice(0, 30);
    console.log('ids sliced: ', ids);
    ids.forEach((element: any) => {
      paramsId = paramsId + 'ids[]=' + element.id + '&';
    });
    return paramsId;
  }

  setPropertyType(data: string) {
    this.propertyType.next(data);
  }

  setSortType(data: string) {
    this.sortType.next(data);
  }

  setList(data: any) {
    this.list.next(data);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console
      alert('Request Error, maybe try another city?');
      return of(result as T);
    };
  }

}

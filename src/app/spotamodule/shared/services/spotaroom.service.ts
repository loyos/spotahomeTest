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

  urlMarkers = 'https://www.spotahome.com/api/public/listings/search/markers/';   // madrid
  //  'https://www.spotahome.com/api/public/listings/search/markers/madrid?type[]='; // apartments, rooms, studios and residences
  urlHomecards = 'https://www.spotahome.com/api/public/listings/search/homecards_ids?';
  //  ids[]=145154&ids[]=145144

  constructor(private http: HttpClient) { }

  getTest() { // testing service
    return of(
      {
        totalElements: 332,
        totalPages: 67,
        content: [
          { id: 1, name: 'Hydrogen' },
          { id: 2, name: 'Helium' },
          { id: 3, name: 'Lithium' },
          { id: 4, name: 'Beryllium' },
          { id: 5, name: 'Boron' },
          { id: 6, name: 'Carbon' },
          { id: 7, name: 'Nitrogen' },
          { id: 8, name: 'Oxygen' },
          { id: 9, name: 'Fluorine' },
          { id: 10, name: 'Neon' },
        ]
      });
  }

  getPropertiesId(type: string, city: string) {
    // this.url = `http://sandbox-1.westeurope.cloudapp.azure.com:8081/api/cities/queryByPage?page=${a}&size=${b}`;

    return this.http.get(this.urlMarkers + city + '?type[]=' + type)
      .pipe(
        catchError(this.handleError('getRooms', []))
      );
    // return this.getTest(); //dev purposes
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
      return of(result as T);
    };
  }

}

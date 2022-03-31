import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Device } from './Device';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private url = 'http://localhost:3333';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.url}/category/device`).pipe(
      tap((_)=> this.log('fetched Devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  addDevice(device: Device): Observable<Device> {
    return this.http
      .post<Device>(
        `${this.url}/category`,
        device,
        this.httpOptions
      )
      .pipe(
        tap((newCategory: Device) =>
          this.log(`added category part number: ${newCategory.part_number}`)
        ),
        catchError(this.handleError<Device>('addCategory'))
      );
  }

  /* deleteDevice(name: String): Observable<Category> {
    const urlDelete = `${this.categoryUrl}/category/${name}`;
    return this.http.delete<Category>(urlDelete, this.httpOptions).pipe(
      tap((_) => this.log(`deleted cateory ${name}`)),
      catchError(this.handleError<Category>('deletedCategory'))
    );
  } */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {}
}
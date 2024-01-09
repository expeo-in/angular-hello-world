import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  getById(id: string): Observable<any> {
    return this.http
      .get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  create(data: any) {
    return this.http.post(this.url, data).pipe(catchError(this.handleError));
  }

  update(data: any) {
    return this.http
      .put(this.url + '/' + data.id, data)
      .pipe(catchError(this.handleError));
  }

  delete(id?: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    if (error.status == 404)
      return throwError(() => new Error('data already deleted'));
    //if (error.status == 500) return throwError(() => new Error('Server error'));

    return throwError(() => error);
  }
}

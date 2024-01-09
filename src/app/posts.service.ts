import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/posts';
import { Observable, catchError, throwError } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends DataService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

  // url: string = 'https://jsonplaceholder.typicode.com/posts';
  // constructor(private http: HttpClient) {}

  // getAllPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.url).pipe(catchError(this.handleError));
  // }

  // createPost(data: Post) {
  //   return this.http.post(this.url, data).pipe(catchError(this.handleError));
  // }

  // updatePost(data: Post) {
  //   return this.http
  //     .put(this.url + '/' + data.id, data)
  //     .pipe(catchError(this.handleError));
  // }

  // deletePost(id?: number) {
  //   return this.http
  //     .delete(this.url + '/' + id)
  //     .pipe(catchError(this.handleError));
  // }

  // handleError(error: any) {
  //   if (error.status == 404)
  //     return throwError(() => new Error('Post already deleted'));
  //   //if (error.status == 500) return throwError(() => new Error('Server error'));

  //   return throwError(() => error);
  // }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  count: number = 0;
  sortBy: any;
  order: any;
  page: any;
  //_http: Http;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    console.log('constructor called');
    this.count = 10;
    //this._http = http
  }

  ngOnInit(): void {
    console.log('post component on init');
    this.sortBy = this.route.snapshot.queryParamMap.get('sortBy');
    this.order = this.route.snapshot.queryParamMap.get('order');
    this.page = this.route.snapshot.queryParamMap.get('page');

    this.route.queryParamMap.subscribe((params) => {});

    // this.http
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe((data: any) => {
    //     this.posts = data;
    //   });

    this.postsService.getAll().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        if (error.status != 0) alert(error);
        else throw error;
      }
    );
  }

  ngOnDestroy(): void {
    console.log('post component destroyed');
  }

  createPost(t1: HTMLInputElement) {
    let data: Post = { title: t1.value };

    t1.value = '';
    this.posts.unshift(data);
    // this.http
    //   .post('https://jsonplaceholder.typicode.com/posts', data)
    //   .subscribe((data) => console.log(data));

    this.postsService.create(data).subscribe(
      (data) => console.log(data),
      (error) => {
        console.log('error occured', error);
        alert(error);
      }
    );
  }

  updatePost(data: Post) {
    data.title += ' updated';
    data.id = 318;
    // this.http
    //   .put('https://jsonplaceholder.typicode.com/posts/' + data.id, data)
    //   .subscribe((result) => console.log(result));

    this.postsService.update(data).subscribe(
      (result) => console.log(result),
      (error) => {
        console.log(error);
        if (error.status == 500) throw error;
        else alert(error);
      }
    );
  }

  deletePost(data: Post) {
    let index = this.posts.indexOf(data);

    // this.http
    //   .delete('https://jsonplaceholder.typicode.com/posts/' + data.id)
    //   .subscribe((result) => console.log(result));

    this.postsService.delete(data.id).subscribe(
      (result) => {
        console.log(result);
        this.posts.splice(index, 1);
      },
      (error) => {
        alert('error occured');
        //this.posts.splice(index, 0, data);
      }
    );
  }
}

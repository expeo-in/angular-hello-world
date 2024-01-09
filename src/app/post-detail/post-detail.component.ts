import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../models/posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  id: string = '';
  post: Post | null = null;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id') || '';
    //this.postService.getById(this.id).subscribe((data) => (this.post = data));

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      this.postService.getById(this.id).subscribe((data) => (this.post = data));
    });
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}

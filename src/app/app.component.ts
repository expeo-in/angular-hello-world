import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(postsService: PostsService) {
    postsService.getAll().subscribe((data: any) => console.log(data.length));
  }
}

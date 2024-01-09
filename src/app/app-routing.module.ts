import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { PostsComponent } from './posts/posts.component';
import { TemplateFormsSampleComponent } from './template-forms-sample/template-forms-sample.component';
import { ReactiveFormsSampleComponent } from './reactive-forms-sample/reactive-forms-sample.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post-details/:id', component: PostDetailComponent },
  { path: 'template-forms', component: TemplateFormsSampleComponent },
  { path: 'reactive-forms', component: ReactiveFormsSampleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

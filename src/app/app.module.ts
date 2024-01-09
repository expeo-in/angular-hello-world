import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToDoService } from './todo/todo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { TodoComponent } from './todo/todo.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { LikeComponent } from './like/like.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CardComponent } from './card/card.component';
import { DirectiveSamplesComponent } from './directive-samples/directive-samples.component';
import { BuildingBlocksComponent } from './building-blocks/building-blocks.component';
import { InputFormatDirective } from './input-format.directive';
import { TemplateFormsSampleComponent } from './template-forms-sample/template-forms-sample.component';
import { ReactiveFormsSampleComponent } from './reactive-forms-sample/reactive-forms-sample.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomErrorHandler } from './custom-error-handler';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TodoComponent,
    CourseDetailComponent,
    SummaryPipe,
    LikeComponent,
    FavoriteComponent,
    CardComponent,
    DirectiveSamplesComponent,
    BuildingBlocksComponent,
    InputFormatDirective,
    TemplateFormsSampleComponent,
    ReactiveFormsSampleComponent,
    PostsComponent,
    HomeComponent,
    NotFoundComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ToDoService,
    { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

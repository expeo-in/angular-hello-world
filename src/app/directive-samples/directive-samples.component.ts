import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-samples',
  templateUrl: './directive-samples.component.html',
  styleUrls: ['./directive-samples.component.scss'],
})
export class DirectiveSamplesComponent implements OnInit {
  // courses: string[] = ['Angular', 'React'];
  courses: any[] = [];

  mode: string = 'list';
  flag: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onModeChange(value: string) {
    this.mode = value;
  }

  onLoad() {
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        creator: { firstName: 'abc', lastName: 'def', companyName: 'Google' },
      }, //200
      { id: 2, name: 'React' }, //201
      { id: 3, name: 'JS' }, //202
      { id: 4, name: 'Html' }, //203
    ];
    this.courses.push({ id: 5, name: 'New Course' + Date.now() });
    console.log(Date.now());
  }

  onAdd(courseName: string) {
    this.courses.push({ id: 4, name: courseName });
  }

  onDelete(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course: any) {
    course.name += ' Updated';
  }

  trackCourses(index: number, course: any) {
    return course.id;
  }
}

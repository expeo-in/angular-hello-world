import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms-sample',
  templateUrl: './template-forms-sample.component.html',
  styleUrls: ['./template-forms-sample.component.scss'],
})
export class TemplateFormsSampleComponent implements OnInit {
  constructor() {}

  countries: any[] = [
    { id: 1, name: 'India' },
    { id: 2, name: 'US' },
    { id: 3, name: 'Pakistan' },
    { id: 4, name: 'Srilanka' },
  ];

  ngOnInit(): void {}

  onEmailChange(email: any) {
    console.log(email);
  }

  onPwdChange(pwd: any) {
    console.log(pwd);
  }

  onSubmit(value: any) {
    // console.log('ngform', f);
    // console.log('ngModelGroup', pi);
    console.log(value);
  }
}

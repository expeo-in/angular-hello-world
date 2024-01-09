import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { CustomValidator } from '../CustomValidator';

@Component({
  selector: 'app-reactive-forms-sample',
  templateUrl: './reactive-forms-sample.component.html',
  styleUrls: ['./reactive-forms-sample.component.scss'],
})
export class ReactiveFormsSampleComponent implements OnInit {
  registrationForm: any;

  // registrationForm = new FormGroup({
  //   email: new FormControl(
  //     '',
  //     [
  //       Validators.required,
  //       CustomValidator.minimumLength(7),
  //       CustomValidator.shouldNotContainSpace,
  //     ],
  //     CustomValidator.isEmailTaken
  //   ),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   personalInfo: new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl(),
  //     gender: new FormControl(),
  //   }),
  //   skillsets: new FormArray([]),
  // });

  constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
      email: fb.control('', [Validators.required, Validators.minLength(7)]),
      password: ['', Validators.required],
      personalInfo: fb.group({
        firstName: [],
        lastName: [],
      }),
      skillsets: fb.array([]),
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get skillsets() {
    return this.registrationForm.get('skillsets') as FormArray;
  }

  addSkill(input: HTMLInputElement) {
    this.skillsets.push(new FormControl(input.value));
    input.value = '';
  }

  removeSkill(control: AbstractControl) {
    let index = this.skillsets.controls.indexOf(control);
    console.log(index);
    this.skillsets.removeAt(index);
  }

  onSubmit() {
    //console.log(JSON.stringify(this.registrationForm.value));
    //this.registrationForm.setErrors({ invalidLogin: true });
    console.log(this.registrationForm.value);
  }
}

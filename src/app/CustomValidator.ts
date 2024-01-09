import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static shouldNotContainSpace(
    control: AbstractControl
  ): ValidationErrors | null {
    if (control.value.indexOf(' ') != -1) {
      return { shouldNotContainSpace: true };
    } else return null;
  }

  static minimumLength(length: number): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      if (control.value.length < length) return { minimumLength: true };
      else return null;
    };
  }

  static isEmailTaken(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'abc@gmail.com') resolve({ isEmailTaken: true });
        else resolve(null);
      }, 2000);
    });
  }
}

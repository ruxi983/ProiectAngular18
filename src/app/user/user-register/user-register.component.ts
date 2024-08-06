import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { format } from 'path';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

registrationForm: FormGroup;

  constructor() { }

  ngOnInit() {
      this.registrationForm=new FormGroup({
        userName: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null,[Validators.required]),
        mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
      }, this.passwordMatchingValidator);

          this.registrationForm.controls['userName'].setValue('e.g: McConor John'),
          this.registrationForm.controls['mobile'].setValue('e.g: 0712345678'),
          this.registrationForm.controls['email'].setValue('e.g: mcconorjohn@business.uk')

    }

      passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null{
        return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null:
        {notmatched: true};
        console.log(this.registrationForm);
      }

    //  passwordMatchingValidator: ValidatorFn = (
    //   control: AbstractControl
    // ): ValidationErrors | null => {
    //   return control.value.password === control.value.confirmPassword
    //     ? null
    //     : { notmatched: true };
    // };


    //getter method for all form controls
    get userName(){
        return this.registrationForm.get('userName') as FormControl;
    }

    get email(){
        return this.registrationForm.get('email') as FormControl;
    }

    get password(){
        return this.registrationForm.get('password') as FormControl;
    }

    get confirmPassword(){
        return this.registrationForm.get('confirmPassword') as FormControl;
    }

    get mobile(){
        return this.registrationForm.get('mobile') as FormControl;
    }

  

  onSubmit(){
    console.log(this.registrationForm);
  }


}

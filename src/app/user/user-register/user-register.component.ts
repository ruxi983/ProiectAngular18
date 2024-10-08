import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { format } from 'path';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder,
              private userService: UserServiceService,
              private alertify: AlertifyService ) { }

  ngOnInit() {
      // this.registrationForm=new FormGroup({
      //   userName: new FormControl(null,Validators.required),
      //   email: new FormControl(null,[Validators.required,Validators.email]),
      //   password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      //   confirmPassword: new FormControl(null,[Validators.required]),
      //   mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
      // }, this.passwordMatchingValidator);

        this.createRegistrationForm();

          // entering default values
          // this.registrationForm.controls['userName'].setValue('e.g: McConor John'),
          // this.registrationForm.controls['mobile'].setValue('e.g: 0712345678'),
          // this.registrationForm.controls['email'].setValue('e.g: mcconorjohn@business.uk')

    }

    createRegistrationForm(){
        this.registrationForm = this.fb.group({
            userName: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null,[Validators.required,Validators.minLength(8)]],
            confirmPassword: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.maxLength(10)]]
        },{validators: this.passwordMatchingValidator});
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

    userData(): User{
      return this.user = {
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        mobile: this.mobile.value
      }
    }

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
    if(this.registrationForm.valid){
      this.alertify.success("Congrats, you are registered");}
    this.userSubmitted = true;
    if(this.registrationForm.valid){   
     // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Congrats, you are registered");
    } else {
      this.alertify.error("Kindly provide valid data for the required fields");
    }
    
  }

  addUser(user: User){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')||'{}');
      users = [user, ...users];
      console.log(users);
    } else
    {
      users = [user]; //swap with users = [user, ...users] to put the element at the end of rthe array;
    }
    localStorage.setItem('Users', JSON.stringify(users));

}


}

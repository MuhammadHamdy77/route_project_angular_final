import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({

    name : new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email,]),
    password: new FormControl('', [Validators.required , Validators.minLength(6) , Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]),
    gender: new FormControl('' , [Validators.required ,]),
    age : new FormControl('' , [Validators.required , Validators.min(17)]),
    phone : new FormControl('' , [Validators.required , Validators.minLength(11) , Validators.maxLength(11) ]),

  })
  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get gender() { return this.registerForm.get('gender'); }
  get age() { return this.registerForm.get('age'); }
  get phone() { return this.registerForm.get('phone'); }

  constructor(private _global:GlobalService , private _router:Router , private toastr: ToastrService) { }
  emailError = ''
  ngOnInit(): void {
   
   
  }


  submitFormRegister(registerForm:FormGroup){

   if(this.registerForm.valid){
      
    this._global.registerUser(this.registerForm.value).subscribe(
      (data)=>{},
      (err)=>{
        if(err.error.data.includes('email')) this.emailError="email used before"
      },
      ()=>{
        this.emailError=""
        this.toastr.info('Register Success');
       setTimeout(() => {
        this._router.navigateByUrl("/login")
       }, 1000);
      },
    )
   }
  }


}

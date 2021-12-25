import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _global:GlobalService , private _router:Router) { }

  loginForm = new FormGroup({

    email: new FormControl('', [Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required  , Validators.minLength(6) , Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')])
  })
  ngOnInit(): void {
  }

  errorsLogin = ''

get email(){return this.loginForm.get('email')}
get password(){return this.loginForm.get('password')}

  loginUser(){

    if(this.loginForm.valid){

      this._global.loginForm(this.loginForm.value).subscribe(

      (data)=>{
        console.log(data.data.token);
        localStorage.setItem("usertoken" , data.data.token)
      },
      (e)=>{  this.errorsLogin = e.error.data },
      ()=>{
        this.errorsLogin = ''
       
        this._global.isAuthed=true
        this._router.navigateByUrl("/profile")
     
      }
      )
    }
    
  }
}

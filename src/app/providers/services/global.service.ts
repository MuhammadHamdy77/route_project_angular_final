import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isAuthed = localStorage.getItem("usertoken")?true:false

  constructor(private _http:HttpClient) { }

  apiUrl = "http://localhost:3000/"

  registerUser(user:any):Observable<any>{
    return this._http.post(`${this.apiUrl}user/register` , user)

  }

  loginForm(user:any):Observable<any>{

   return this._http.post(`${this.apiUrl}user/login` , user)
  }

  profileUser(){
    return this._http.get(`${this.apiUrl}user/profile`)
  }
  
  logout(){
  return  this._http.post(`${this.apiUrl}user/logout` , null)
  }


  getNews():Observable<any>{
    return this._http.get("https://newsapi.org/v2/everything?q=apple&from=2021-11-08&to=2021-11-08&sortBy=popularity&apiKey=eae05651fd8247ef805a7a6eb125ef11")
  }
  getNewsSport(contry:string):Observable<any>{
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=${contry}&category=sport&apiKey=eae05651fd8247ef805a7a6eb125ef11`)
  }
  
  getNewsSportCategory( category:string):Observable<any>{
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=eae05651fd8247ef805a7a6eb125ef11`)
  }
  pizza():Observable<any>{
    return this._http.get("https://forkify-api.herokuapp.com/api/search?q=pizza")
  }

}

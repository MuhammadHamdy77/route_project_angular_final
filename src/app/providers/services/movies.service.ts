import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http:HttpClient) { }

  getTerending(mediaType:string):Observable<any>{

    return this._http.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=48a641f4f76d7c9d5c11600f517a91fa`)
  }


  movieDetails(id:string):Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=48a641f4f76d7c9d5c11600f517a91fa&language=en-US`)
  }

  getPersonDetails(id:string):Observable<any>{
  return this._http.get(`https://api.themoviedb.org/3/person/${id}?api_key=48a641f4f76d7c9d5c11600f517a91fa&language=en-US`)
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/services/movies.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  trendingMovies:any[]= [];
  trendingTv:any[]= [];
  trendingPeople:any[]= [];

  imgPrefix:string = "https://image.tmdb.org/t/p/w500/"
  constructor(private _movies:MoviesService) { 

    _movies.getTerending("all").subscribe(
      (data)=>{
        this.trendingMovies = data.results.slice(0,20)
      });

    _movies.getTerending("person").subscribe((data)=>{
        this.trendingPeople = data.results.slice(0,12)
        console.log(this.trendingPeople);
        
      });
    

  }

  ngOnInit(): void {
  }

}

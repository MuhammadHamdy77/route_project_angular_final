import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/providers/services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

id:string = ''
movieDetailss:any = {}
imgPrefix:string = "https://image.tmdb.org/t/p/w500/"

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 

    this.id = _ActivatedRoute.snapshot.params.id
    _MoviesService.movieDetails(this.id).subscribe((respons)=>{

    this.movieDetailss = respons ; 
    })
  }

  ngOnInit(): void {
  }

}

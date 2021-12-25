import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/providers/services/movies.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {
id:string=''
allDetails:any = {}
imgPrefix:string = "https://image.tmdb.org/t/p/w500/"
  constructor(private _ActivatedRoute:ActivatedRoute , private _movies:MoviesService) { 

    this.id = this._ActivatedRoute.snapshot.params.id
    _movies.getPersonDetails(this.id).subscribe((data)=>{

      this.allDetails = data
      console.log(this.allDetails);
      
    })

    
  }

  ngOnInit(): void {
  //  this.getPersonDetails()
  }


}

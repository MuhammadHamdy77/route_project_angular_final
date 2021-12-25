import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _global:GlobalService) { }

  pizzaBox:any []=[]
  ngOnInit(): void {
    this.getPizaa()
  }

  

  getPizaa(){
    this._global.pizza().subscribe(pizza=>{

      this.pizzaBox = pizza.recipes
       
    })
  }
 
}

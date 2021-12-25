import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  cartona:any[]=[]
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this.newsSport()
  }

  contry:string = "il"
  category:string = "sport"

  newsSport(){
    this._global.getNewsSport(this.contry).subscribe((data)=>{

      this.cartona = data.articles;
      
    })
  }


  countryChange(count:any){

    this._global.getNewsSport(count.target.value).subscribe((respo)=>{

      this.cartona = respo.articles;
      
    })
  }
  categoryChange(catego:any){

    this._global.getNewsSportCategory(catego.target.value).subscribe((respo)=>{

      this.cartona = respo.articles;
      
    })
  }
}

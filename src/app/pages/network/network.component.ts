import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this.neewApiGet()
  }

cartona:any[]=[]

  neewApiGet(){
    this._global.getNews().subscribe((data)=>{

      this.cartona = data.articles;
      

    })
  }
}

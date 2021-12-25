import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(social_rank:string , count:number):string {
   
    return social_rank.slice(0,count)
  }

}

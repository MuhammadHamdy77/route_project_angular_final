import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/providers/services/weather.service';
import { Student } from 'src/app/providers/_models/student';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  city:string = 'cairo'
  allWeather:any = {}
  constructor(private _http:WeatherService) { }

  i=1
  interval:any
  imgUrl:string = `assets/images/1.jpeg`

  ngOnInit(): void {
  }

  start(){

   this.interval =  setInterval(()=>{
      this.i++
     if(this.i == 3)
      this.i = 1
      this.imgUrl = `assets/images/${this.i}.jpeg`
     
     console.log(this.i);
     
    },2000)


    
  }

  stop(){
    
    if(this.interval)
    clearInterval(this.interval)
  }
  
newst:Student = new Student(0 , "" , 26 )

student:Student []=[
  new Student(2 , "Beckham" , 26),
  new Student(100 , "Ronaldo" , 36),
  new Student(102 , "Hamed" , 24),
  new Student(104 , "Moka" , 55),
  new Student(188 , "Hamdey" , 11),
  new Student(20 , "Mohamed" , 55),
  new Student(125 , "Hamaki" , 27),
  new Student(77 , "Muhmmed" , 28),
];
nameBTN:string = 'Show'
newFlag:boolean = false
btnUpdate:boolean = true

addSt(){
  this.student.push(new Student(this.newst.id,this.newst.name,this.newst.age))
}


newFlagfun(){
  this.newFlag = !this.newFlag
  if(this.newFlag == true){
    this.nameBTN = "Hidden"
  } else{
    this.nameBTN = 'Show'
  }
}

delete(id:any){

if(confirm("Are You Sure Delete Student !")){
  this.student.splice(id,1)
}
  
}

stdetails:Student = new Student(0,'',0)
showdetails:boolean = false
details(id:number){

  this.student.forEach(el=>{

    if(el.id == id){

      this.stdetails.id = el.id;
      this.stdetails.name = el.name;
      this.stdetails.age = el.age;
      this.showdetails = true

    }
  })
}




}

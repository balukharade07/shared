import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  {

  quotes=[ 
    "Work hard, stay positive, and get up early. It's the best part of the day.",
    "Always do your best. What you plant now, you will harvest later.",
    "Keep your face to the sunshine and you cannot see a shadow."
];
  name = "";
  toggle="hide";
  item = false;
  bindEmail = false;
  add(){
    if(this.quotes.length>9){
     
       this.item = true;
       alert("your 10 Best quotes is there");
    }
    else{
     
      this.quotes.push(this.name);
     
    }

   
  }
   
  remove(a){
    this.item = false;
    this.quotes.splice(a,1);
  }

  function(){
   if( this.bindEmail == false)
   {
    this.bindEmail = true;
    this.toggle="Show";
   }else{
    this.bindEmail = false;
    this.toggle="hide";
   }
  }
 
}

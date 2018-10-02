import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  {

  quotes=[ "Balasaheb"];
  name = "";
  toggle="hide";
  item = false;
  bindEmail = false;
  add(){
    if(this.quotes.length>10){
     
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

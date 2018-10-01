import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  {

  quotes=[ "Balasaheb"];
  name = "";
  item = false;
  bindEmail = false;
  add(){
    if(this.quotes.length>10){
       this.item = true;
    }else{
     
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
   }else{
    this.bindEmail = false;
   }
  }
 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  {

  quotes=[ "abc"];
  name = "";
  add(){
    this.quotes.push(this.name);
  }
  remove(){
    this.quotes.splice(-1);
  }
 
}

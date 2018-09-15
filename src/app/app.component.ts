import { Component } from '@angular/core';
import { FetchdataService } from './fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  show :boolean = false;
  x = {};
  items = {
    title :'balu',
    body :"bodyy",
    userId : 222
  }
 
  constructor(private fetchdata : FetchdataService){
  }

showData() {
  this.fetchdata.getdata().subscribe(data => {
    this.x = data;
  });
}



setdata(){
  this.fetchdata.postdata(this.items).subscribe(Response => console.log(Response));
  
}




}

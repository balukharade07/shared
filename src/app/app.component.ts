import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New';
  time= "Timeing Project";
  a = 0;
  strat(){
 
    if(this.a < 5 ){
      
      this.a++;
      //alert(this.a);
       
    }

  }
}

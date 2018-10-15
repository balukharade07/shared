import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New';
  time= "Timeing Project";
  a:number = 0;
  strat(){
      for (this.a = 1;this.a < 10;this.a++)
      alert(this.a);
      
      
       
    

  }
}

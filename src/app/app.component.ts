import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New';

  submitted = false;

  login={
    name : '',
    password : ''
  };
  login1={
    name : 'balu',
    password : 'balu'
  };
   
  onSubmit(){
if(this.login.name === this.login1.name && this.login.password === this.login1.password)
{
  alert("Login sucefully");
  this.submitted = true;
}
else{
  alert("please Login");
}
  }
}

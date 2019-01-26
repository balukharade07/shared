import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {

  constructor() { }

  newContact:any[];

  onSubmit(){
   alert("hii");
  }

  onSubmitSave(){
   
  }
  ngOnInit() {
  }

}

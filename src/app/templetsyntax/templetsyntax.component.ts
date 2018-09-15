import { Component, OnInit } from '@angular/core';

export class Kharade{

  id : number;
  name :string;
  
}

const BALU: Kharade[]=[

  {
    id:1,
    name:'Pramod'
  },
  {
    id:2,
    name:'Nitin'
  },
  {
    id:3,
    name:'Nilesh'
  },
  {
    id:4,
    name:'Sagar'
  },
  {
    id:5,
    name:'Sarjerao'}
]

@Component({
  selector: 'app-templetsyntax',
  templateUrl: './templetsyntax.component.html',
  styleUrls: ['./templetsyntax.component.css']
})
export class TempletsyntaxComponent  {

  constructor() { }

 
  Kharade = BALU;

  totalCars: number = 985;
  isHidden : boolean = false;
  isCarSelected = false;
  // name = 'welcome';

  status = true;
  checkSpecial(){
    return true;
  }

  onClick(){
    alert('hi');
  }

  numbers = [1,2,3,4];
  classConfig = {
    color  : 'yellow',  // nameOFthe Class : boolean value
    backgroundColor : 'green'

  }

  styleConfig = {
    color  : 'yellow',  // nameOFthe Class : boolean value
    backgroundColor : 'green'

  }
  // red = 'red';

  // x = 'abc';
  // p = 'xy';
  // b = 'bk';
  // today = new Date();
  
  

}

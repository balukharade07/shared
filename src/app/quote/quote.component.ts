import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

constructor(private formBuilder: FormBuilder) { } 

ngOnInit() {
  this.myforms = this.formBuilder.group({
    textinput: ['', [Validators.required,Validators.pattern('/^[a-zA-Z ]+$/')]],
     
  });
}
myforms :FormGroup;

textinput:FormControl;

submitted = false;


  name = "";
  toggle="hide";
  item = false;
  bindEmail = false;
  add(){

    
    if(this.quotes.length > 9){
       this.item = true;
       alert("your 10 Best quotes is there");
    }
    else{
     this.quotes.push(this.name);
     this.name = "";
     this.submitted = true;

     // stop here if form is invalid
     if (this.myforms.invalid) {
         return;
     }

     alert('SUCCESS!! :-)')
     }
}

get f() { return this.myforms.controls; }
// reset(){
//   this.name = "";
// }
hide = false;

Family:any=[
  {
    'name':'Kiran',
    'lastname':'kharade',
    'city':"Kamti",
   },
   {
    'name':'Balu',
    'lastname':'kharade',
    'city':'Pune',
   },
   {
    'name':'Shrikant',
    'lastname':'kharade',
    'city':'Solapur',
   }
]

getColor(city) { 
  
  switch (city) {
    case 'Kamti':
      return 'green';
    case 'Pune':
      return 'blue';
    case 'Solapur':
      return 'red';
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

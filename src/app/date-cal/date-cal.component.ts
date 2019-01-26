import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-date-cal',
  templateUrl: './date-cal.component.html',
  styleUrls: ['./date-cal.component.css']
})
export class DateCalComponent implements OnInit {


  maxDate = new Date;
  
  today = new Date;

  myForm: FormGroup; 
  Todays_Date: FormControl;
  DOB: FormControl;

  submitted = false;




  constructor(private fb: FormBuilder,) { }
  ngOnInit() {
  
    this.formgroup();

  }


  calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}





  formgroup(){
    const patient= localStorage.getItem('userId');
    console.log(patient)
     this.myForm = new FormGroup({
       
   
       Todays_Date: new FormControl(this.today),
       DOB: new FormControl('', [Validators.required]),
   
 
   });
   }
   

   totime;
   years:any;
   days:any;
   year:any;
   birthdate :any;

   onSearchChange() {
      // this.birthdate = document.getElementById("txtdate").value;
      this.totime = new Date;
     // this.years = this.totime.getFullYear() - this.myForm.DOB.getFullYear();
      // this.year = this.years.
      
            
      let year = this.myForm.value.DOB.split("-")[0]
      let date = this.myForm.value.DOB.split("-")[2]
      let month = this.myForm.value.DOB.split("-")[1]

      let date1 = new Date(month+"/"+date+"/"+year);
      let date2 = new Date();
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      this.years = Math.round(diffDays/365);
      this.days = (diffDays%365);

     }
   onSubmit(){
     if(this.myForm.valid){
       console.log(this.myForm.value);
     } else if(this.myForm.invalid){
      this.submitted= true;
      console.log(this.myForm.errors);
     }
   }
 

}

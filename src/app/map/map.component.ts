import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  name = "Angular Google Map";
  latitude:number = 18.5204;
  longitude:number  = 73.8567;
  locationChoose = true;

  onChooselocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lgn;
    this.locationChoose = false;
      
  }


  //AIzaSyB1m0Rl-MNzFNyO4d4pApcb_KMJEMU0uuw
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'

})

export class FetchdataService {
  dataUrl = "assets/data.json";

  remoteUrl = "https://jsonplaceholder.typicode.com/posts";

    httpOptions={
      headers :new HttpHeaders({
      "Content-Type":"application/json",
      "x":"y"
  })
  };

  constructor(private http : HttpClient) { }

  getdata(){
    return this.http.get(this.remoteUrl);
  }
  postdata(items){
    return this.http.post(this.remoteUrl,items,this.httpOptions);
  }
}

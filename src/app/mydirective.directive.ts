import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(public el: ElementRef, public rend:Renderer) { }
  
  //@Input()  check : boolean;
 

  ngOnInit(){
    this.rend.setElementStyle(this.el.nativeElement,'background-color','#ccc');
      }

}

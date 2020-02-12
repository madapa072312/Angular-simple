import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private render:Renderer2) {
    
   }
   @HostListener("mouseover")
   onMouveOver(){
      let part = this.el.nativeElement.querySelector('.img');
      this.render.setStyle(part,'display','block');
  }
  @HostListener("mouseout")
  onMouseOut(){
    let part = this.el.nativeElement.querySelector('.img');
      this.render.setStyle(part,'display','none');
  }

}

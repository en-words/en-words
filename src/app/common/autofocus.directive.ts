import {Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(el, 'focus', []);
  }
}

import { NgModule } from '@angular/core';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [],
  declarations: [ <%= classify(name) %>Component ]
})
export class <%= classify(name) %>Module { }

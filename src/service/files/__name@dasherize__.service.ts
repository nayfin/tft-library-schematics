import { Injectable } from '@angular/core';
import { <%= classify(name) %>Store } from './<%= dasherize(name) %>.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class <%= classify(name) %>Service {

  constructor(private <%= camelize(name) %>Store: <%= classify(name) %>Store,
              private http: HttpClient) {
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{<%= camelize(name) %>Store.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{<%= camelize(name) %>Store.add(entity);
    // });
  }

}

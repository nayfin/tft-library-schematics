import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { <%= classify(name) %>Service } from '../state/<%= dasherize(name) %>.service';
import { <%= classify(name) %>Query } from '../state/<%= dasherize(name) %>.query';
import { <%= singular(classify(name)) %> } from '../state/<%= singular(dasherize(name)) %>.model';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']
})
export class <%= classify(name) %>Component implements OnInit {
  <%= camelize(name) %>$: Observable<<%= singular(classify(name)) %>[]>;
  isLoading$: Observable<boolean>;

  displayedColumns = ['id', 'name', 'actions'];
  constructor(
    private router: Router,

    private <%= camelize(name) %>Query: <%= classify(name) %>Query,
    private <%= camelize(name) %>Service: <%= classify(name) %>Service
  ) { }

  ngOnInit() {
    this.<%= camelize(name) %>$ = this.<%= camelize(name) %>Query.selectAll();
    this.isLoading$ = this.<%= camelize(name) %>Query.selectLoading();

    // this.<%= camelize(name) %>Service.get();
  }

  add(<%= singular(camelize(name)) %>: <%= singular(classify(name)) %>) {
    this.router.navigate(['add'], {relativeTo: this.route});
    // this.<%= camelize(name) %>Service.add(<%= singular(camelize(name)) %>);
  }

  edit(id: ID, <%= singular(camelize(name)) %>: Partial<<%= singular(classify(name)) %>>) {
    console.log(`Placeholder for add`);
    // this.<%= camelize(name) %>Service.update(id, <%= singular(camelize(name)) %>);
  }

  remove(id: string) {
    console.log(`Removing`);
    this.<%= camelize(name) %>Service.remove(id);
  }

  copy(id: ID, <%= singular(camelize(name)) %>: Partial<<%= singular(classify(name)) %>>) {
    console.log(`Placeholder for copy`);
    // this.<%= camelize(name) %>Service.update(id, <%= singular(camelize(name)) %>);
  }
}

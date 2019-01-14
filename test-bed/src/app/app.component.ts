import { Component } from '@angular/core';
import { TestsQuery, TestsService } from './tests/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the test bed';
  // tests$ = this.testsQuery.tests$;
  constructor(
    // private testsQuery: TestsQuery,
    // private testsService: TestsService,
    ) { }

  addTest() {
    // this.testsService.add({name: 'testing first add', value: 'some value'});
  }
}

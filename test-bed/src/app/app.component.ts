import { Component, NgZone } from '@angular/core';
import { TestsQuery, TestsService } from './tests/state';
import { akitaDevtools } from '@datorama/akita/src/enhancers/devtools';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the test bed';
  // tests$ = this.testsQuery.tests$;
  constructor(private ngZone: NgZone) {
    if (!environment.production) {
      akitaDevtools(ngZone);
    }
  }
}

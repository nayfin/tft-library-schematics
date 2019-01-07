import { Injectable } from '@angular/core';<% if (!plain) { %>
import { MatSnackBar } from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
<% } %>

import { <%= classify(name) %>Store } from './<%= dasherize(name) %>.store';<% if (!plain) { %>
import { <%= singular(classify(name)) %> } from './<%= singular(dasherize(name)) %>.model';<% } %>

@Injectable({ providedIn: 'root' })
export class <%= classify(name) %>Service {

<% if (!plain) { %>
  <%= camelize(name) %>Collection: AngularFirestoreCollection;
<% } %>
  constructor(
    private <%= camelize(name) %>Store: <%= classify(name) %>Store,<% if (!plain) { %>
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
<% } %>) {<% if (!plain) { %>
    this.<%= camelize(name) %>Collection = afs.collection('<%= camelize(name) %>');
    this.fetch();
<% } %>}

<% if (!plain) { %>
  fetch() {
    this.<%= camelize(name) %>Collection.valueChanges().subscribe( (<%= camelize(name) %>: <%= singular(classify(name)) %>[]) => {
      this.<%= camelize(name) %>Store.set(<%= camelize(name) %>);
    });
  }

  setActive<%= singular(classify(name)) %>(id: string) {
    this.<%= camelize(name) %>Store.setActive(id);
  }

  add(<%= singular(camelize(name)) %>Data: Partial<<%= singular(classify(name)) %>>) {
    const id = this.afs.createId();
    const <%= singular(camelize(name)) %> = {...<%= singular(camelize(name)) %>Data, id } as <%= singular(classify(name)) %>;
    this.<%= camelize(name) %>Collection.doc(id).set(<%= singular(camelize(name)) %>)
      .then( (res) => {
      this.<%= camelize(name) %>Store.add(<%= singular(camelize(name)) %>);
      this.snackBar.open(`Successfully added`, 'CLOSE', { duration: 3000 });
    }).catch( (err) => {
      this.snackBar.open(`${err.message}`, 'CLOSE', { duration: 3000 });
      console.error(err);
    });
  }

  update(id, <%= singular(camelize(name)) %>: Partial<<%= singular(classify(name)) %>>) {
    this.<%= camelize(name) %>Collection.doc(id).update(<%= singular(camelize(name)) %>)
      .then( (res) => {
      this.<%= camelize(name) %>Store.update(id, <%= singular(camelize(name)) %>);
      this.snackBar.open(`Successfully edited`, 'CLOSE', { duration: 3000 });
    }).catch( (err) => {
      this.snackBar.open(`${err.message}`, 'CLOSE', { duration: 3000 });
      console.error(err);
    });
  }

  remove(id: string) {
    this.<%= camelize(name) %>Collection.doc(id).delete()
      .then( (res) => {
      this.<%= camelize(name) %>Store.remove(id);
      this.snackBar.open(`Successfully deleted`, 'CLOSE', { duration: 3000 });
    }).catch( (err) => {
      this.snackBar.open(`${err.message}`, 'CLOSE', { duration: 3000 });
      console.error(err);
    });
  }<% } %>
}

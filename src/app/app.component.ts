import { Component, ViewChild } from '@angular/core';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(FooComponent) foo: FooComponent

  title = 'ivy-view-child-accesssor-bug';
}

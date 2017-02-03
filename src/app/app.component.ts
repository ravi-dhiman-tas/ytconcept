import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign In';

  signin = new FormComponent("", "", "");

  al() {
    console.log( JSON.stringify(this.signin) );
  }

  onsubmit() {
    console.log( JSON.stringify(this.signin) );
  }
}

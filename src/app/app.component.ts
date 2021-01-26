import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PodRequest';

  email = new FormControl;

  submitEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validation = re.test(String(this.email.value).toLowerCase());
    let errorDiv = document.getElementById("invalidEmail");
    if (!validation || this.email.value == null) {
      errorDiv.style.display = "block";
    }
    else {
      errorDiv.style.display = "none";
    }
  }
}

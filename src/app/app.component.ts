import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Constant
import { appPath } from './app-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECApplication';
  path = appPath;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.config);
  }

}

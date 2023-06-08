import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss']
})
export class AppTopbarComponent {
  constructor(public router: Router) { }

  public OnClickRoute(path: string): void {
    this.router.navigate([path]);
  }

}

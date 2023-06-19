import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../app/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularrouting';
  userAddedSubscription: Subscription | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }

  onLoginClick() {
    // Implement your login logic here
  }

  onLogoutClick() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.userAddedSubscription) {
      this.userAddedSubscription.unsubscribe();
    }
  }

}

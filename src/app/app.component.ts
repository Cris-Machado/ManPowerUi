import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManPowerUi';
  currentTime: string;

  constructor(private router: Router) {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  
  logout(): void {
    localStorage.clear(); 
    window.location.reload();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}

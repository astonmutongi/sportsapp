import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isUserAuthenticated = localStorage.getItem('loggedIn') == 'true';

  ngOnInit() {
        
    }

    login() {      
        localStorage.setItem('loggedIn','true');
        this.isUserAuthenticated = localStorage.getItem('loggedIn') == 'true';
    }
}

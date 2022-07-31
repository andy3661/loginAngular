import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';


  isLogged: Boolean = false;

  subscription!: Subscription;
  constructor(private service: AuthService) { }

  ngOnInit(): void {

    this.subscription = this.service.getUserData().subscribe(data => {
   this.isLogged = data.isLogged
    });
  }
}

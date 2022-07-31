import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogged: Boolean = false;

  subscription!: Subscription;
  constructor(private service: AuthService) { }

  ngOnInit(): void {

    this.subscription = this.service.getUserData().subscribe(data => {
   this.isLogged = data.isLogged
    });
  }
}

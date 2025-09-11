import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RouterLinkActive, RouterOutlet } from "//wsl.localhost/Ubuntu-24.04/home/magser110/runningApp091825FrontEnd/running_app/node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    constructor(public authService: AuthenticationService){}

    logout(){
      this.authService.logout();
    }
}

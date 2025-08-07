import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'softcode';
   isSidebarHidden = false;
isLoggedIn: any;

  constructor( private router: Router) {}

 

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
 
}

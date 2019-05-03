import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faCog = faCog;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/adminlogin']);
  }

}

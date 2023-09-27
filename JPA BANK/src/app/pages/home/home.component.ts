import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  clicouBotao(){
    this.router.navigate(['cliente/novo'])
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string = "../../assets/wwaf.png"

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}

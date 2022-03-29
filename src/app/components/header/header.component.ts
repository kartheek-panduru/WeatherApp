import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'The Weather App';
  temp: string = '24 ° Celcius';
  city: string = 'Visakhapatnam';
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 navigation = [ 
    {name: "Home",  color: "#205fbd"},
    {name: "Genres", color: "#164283"},
    {name: "Deals", color: "#ac1a37"},
    {name: "Login", color: "#d03a67"}
  ];

  
  
}

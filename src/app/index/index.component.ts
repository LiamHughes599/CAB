import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  featuredBooks = [
    {name: "Good Omens", Price: "30.79", Author: "Terry Pratchett", bookCover: "./assets/images/bookCovers/GoodOmens.jpg"},
    {name: "Nothing to See Here", Price: "23.95", Author: "Kevin Wilson", bookCover: "./assets/images/bookCovers/NothingtoSeeHere.jpg"},
    {name: "The Substitution Order", Price: "31.49", Author: "Martin Clark", bookCover: "./assets/images/bookCovers/theSubstitutionOrder.jpg"},
    {name: "Twisted Twenty-Six", Price: "22.40", Author: "Janet Evanovich", bookCover: "./assets/images/bookCovers/TwistedTwentySix.jpg"}
  ];
  otherBooks = [
    {name: "Good Omens", Price: "30.79", Author: "Terry Pratchett", bookCover: "./assets/images/bookCovers/GoodOmens.jpg"},
    {name: "Nothing to See Here", Price: "23.95", Author: "Kevin Wilson", bookCover: "./assets/images/bookCovers/NothingtoSeeHere.jpg"},
    {name: "The Substitution Order", Price: "31.49", Author: "Martin Clark", bookCover: "./assets/images/bookCovers/theSubstitutionOrder.jpg"},
    {name: "Twisted Twenty-Six", Price: "22.40", Author: "Janet Evanovich", bookCover: "./assets/images/bookCovers/TwistedTwentySix.jpg"}, 
    {name: "Good Omens", Price: "30.79", Author: "Terry Pratchett", bookCover: "./assets/images/bookCovers/GoodOmens.jpg"},
    {name: "Nothing to See Here", Price: "23.95", Author: "Kevin Wilson", bookCover: "./assets/images/bookCovers/NothingtoSeeHere.jpg"},
    {name: "The Substitution Order", Price: "31.49", Author: "Martin Clark", bookCover: "./assets/images/bookCovers/theSubstitutionOrder.jpg"},
    {name: "Twisted Twenty-Six", Price: "22.40", Author: "Janet Evanovich", bookCover: "./assets/images/bookCovers/TwistedTwentySix.jpg"}
  ];

  ranNum1 = Math.floor(Math.random() * 2);

  ranNum2 = Math.floor(Math.random() * (5 - 3)) + 2;

  constructor() { }

  ngOnInit(): void {
  }
}

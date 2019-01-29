import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  title = "Quotes";
  constructor() {}
  quotes = [
    new Quote(
      1,
      "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
      " Joe Girard",
      "Queen",
      0,
      0,
      new Date(2018, 3, 14)
    ),
    new Quote(
      2,
      "I am so clever that sometimes I don’t understand a single word of what I am saying.",
      " Oscar Wilde",
      "Queen",
      0,
      0,
      new Date(2018, 3, 14)
    ),
    new Quote(
      3,
      "People say nothing is impossible, but I do nothing every day.",
      "Winnie the Pooh",
      "Queen",
      0,
      0,
      new Date(2018, 3, 14)
    ),
    new Quote(
      4,
      "You can’t have everything. Where would you put it?",
      "Steven Wright",
      "Queen",
      0,
      0,
      new Date(2018, 3, 14)
    ),
    new Quote(
      5,
      "I didn’t fail the test. I just found 100 ways to do it wrong.",
      "Benjamin Franklin",
      "Queen",
      0,
      0,
      new Date(2018, 3, 14)
    )
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = length + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  saveNewQuote(quote) {}

  ngOnInit() {}
}

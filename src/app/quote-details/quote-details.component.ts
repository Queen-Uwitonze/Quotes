import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";
import { $ } from "protractor";

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  upVote() {
    this.quote.upVote++;
    let upVote = confirm(`great choise`);
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {}

  ngOnInit() {}
}

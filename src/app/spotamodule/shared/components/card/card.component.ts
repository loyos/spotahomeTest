import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() properties: string;

  constructor() { }

  ngOnInit() {
    console.log('properties from card: ', this.properties);
  }

}

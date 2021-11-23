import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item : any;
  url_images = environment.URL_IMAGES
  @Output() clickOnCard = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickCard() {
    this.clickOnCard.emit()
  }
}

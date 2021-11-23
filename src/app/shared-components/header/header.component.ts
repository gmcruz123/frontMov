import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() eventCategory = new EventEmitter();
  @Output() eventSearch = new EventEmitter();
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }

  clickOnCategory(category:string){
    this.eventCategory.emit(category);

  }

  search(){
    this.eventSearch.emit(this.searchText);
  }
}

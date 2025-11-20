import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string;

  @Output()
  searchTextEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  // searchTextChanged() {
  //   console.log(this.searchText)
  //   this.searchTextEvent.emit(this.searchText);
  // }

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextEvent.emit(this.searchText);
  }

}

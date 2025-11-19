import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string;

  @Output()
  searchTextEvent: EventEmitter<string> = new EventEmitter<string>();

  // searchTextChanged() {
  //   console.log(this.searchText)
  //   this.searchTextEvent.emit(this.searchText);
  // }

  updateSearchText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value;
    this.searchTextEvent.emit(this.searchText);
  }

}

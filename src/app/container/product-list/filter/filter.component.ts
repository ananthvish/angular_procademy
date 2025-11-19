import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  selectedFilterRadioButton: String = 'all';

  @Output()
  selectedFilterChanged: EventEmitter<String> = new EventEmitter<string>();

  selectedFilterChangeEvent() {
    this.selectedFilterChanged.emit(this.selectedFilterRadioButton);
  }
}

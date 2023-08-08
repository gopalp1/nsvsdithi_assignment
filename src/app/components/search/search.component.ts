import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { drug1 } from 'src/app/drug1';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';
  list: any = [];
  filteredData: any = [];
  selectedData: any = [];
  constructor(private location: Location) {

  }

  ngOnInit(): void {
    this.list = drug1

  }
  searchData() {
    if (this.searchText.length == 0) {
      this.filteredData = [];
      this.selectedData = [];

    } else {
      this.filteredData = this.list.fields.filter((data: any) =>
        data.label.toLowerCase().includes(this.searchText.toLowerCase()) || data.type.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  select(data: any) {
    this.selectedData.push(data);
    // this.searchText='';
    this.filteredData = [];
  }

  goBack() {
    this.location.back();
  }
}

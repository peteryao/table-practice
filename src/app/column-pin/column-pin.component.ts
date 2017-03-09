import { Component } from '@angular/core';

@Component({
  selector: 'column-pin-component',
  styleUrls: ['./column-pin.component.css'],
  template: `
      <h3> Infinte ngx datatables
      </h3>
      <ngx-datatable
        class='material'
        [rows]='rows'
        [columnMode]="'standard'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
        [loadingIndicator]="isLoading"
        (page)="onPage($event)">
        <ngx-datatable-column name="Name" width="300">
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender" width="300">
        </ngx-datatable-column>
        <ngx-datatable-column name="Age" width="80">
        </ngx-datatable-column>
      </ngx-datatable>
  `
})
export class ColumnPinComponent {

  rows = [];
  expanded = {};
  timeout: any;
  isLoading = false;

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
      this.isLoading = false;
      if (this.rows.length < 1000) {
        this.isLoading = true;
        this.rows = this.rows.concat(this.rows);
      }
      this.isLoading = false;
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100.json`);
    this.isLoading = true;
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    this.isLoading = false;
    req.send();
  }

  getRowClass(row) {
    return {
      'age-is-ten': (row.age % 10) === 0
    };
  }

}
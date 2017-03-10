import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-test',
  templateUrl: './ui-test.component.html',
})
export class UiTestComponent implements OnInit {
  myControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
  ];
  filteredOptions: Observable<string[]>;

  doctors = [
    {
      name: 'Doc1',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Doc2',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Doc3',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(val, 'gi').test(option));
  }

}

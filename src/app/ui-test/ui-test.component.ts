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
      id: '0000000000',
      programs: ['program1', 'program2'],
      updated: new Date('1/1/16'),
      street: 'street1',
      city: 'city1',
      state: 'NA',
      zip: '00000',
      taxid: '1234567890',
      practiceName: 'practice'
    },
    {
      name: 'Doc2',
      id: '0000000000',
      programs: ['program1', 'program2'],
      updated: new Date('1/1/16'),
      street: 'street1',
      city: 'city1',
      state: 'NA',
      zip: '00000',
      taxid: '1234567890',
      practiceName: 'practice'
    },
    {
      name: 'Doc3',
      id: '0000000000',
      programs: ['program1', 'program2'],
      updated: new Date('1/1/16'),
      street: 'street1',
      city: 'city1',
      state: 'NA',
      zip: '00000',
      taxid: '1234567890',
      practiceName: 'practice'
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

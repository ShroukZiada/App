import { Component, Input } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  age: number;
  department: string;
  salary: number;
  [key: string]: any;

}
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})


export class SharedComponent {
  @Input() employees: Employee[] = [];
  @Input() departments: string[] = [];
  @Input() columnsToDisplay?: string[] = [];
  selectedDepartment: string = '';


  getFilteredEmployees() {
    if (this.selectedDepartment) {
      return this.employees.filter(employee => employee.department === this.selectedDepartment);
    }
    return this.employees;
  }

}

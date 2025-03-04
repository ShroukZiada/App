import { Component } from '@angular/core';
import { Employee } from '../shared/shared.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees: Employee[] = [
    { id: 1, name: 'Ali', age: 30, department: 'HR', salary: 50000 },
    { id: 2, name: 'Bob', age: 25, department: 'IT', salary: 60000 },
    { id: 3, name: 'ahmed', age: 28, department: 'HR', salary: 60000 },
    { id: 4, name: 'aya', age: 35, department: 'Finance', salary: 70000 },
    { id: 5, name: 'Mo', age: 28, department: 'software', salary: 55000 },
    { id: 6, name: 'aliaa', age: 28, department: 'software', salary: 55000 },
    { id: 7, name: 'Mo', age: 28, department: 'software', salary: 55000 },
    { id: 8, name: 'Mai', age: 40, department: 'IT', salary: 65000 },
    { id: 9, name: 'Mai', age: 40, department: 'IT', salary: 65000 },
    { id: 10, name: 'Mai', age: 40, department: 'IT', salary: 65000 },
  ];

  departments: string[] = ['HR', 'IT', 'Finance', 'software'];
  columnsToDisplay: any[] = ['id', 'name', 'salary', 'department'];
}

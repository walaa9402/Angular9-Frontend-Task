import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export class EmployeeDto {
    id: number;
    name: string;
    code: number;
    department: string;
    birthday: NgbDate;
    gender: string;
    selected: boolean;
}
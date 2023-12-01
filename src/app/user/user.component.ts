import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {Student} from '../model/student.m';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  studentList: any;
  student: Student = new Student();
  message1 = '';
  message2 = '';
  message3 = '';
  check: boolean;

  constructor(private userService: UserServiceService, private spinner: NgxSpinnerService) {
  }

  validation() {
    this.check = true;
    this.message1 = '';
    this.message2 = '';
    this.message3 = '';
    if (!this.student.name) {
      this.check = false;
      this.message1 = '<div class="alert alert-danger col-md-12">Enter Name</div>';
    }
    if (!this.student.email) {
      this.check = false;
      this.message2 = '<div class="alert alert-danger col-md-12">Enter Email</div>';
    }
    if (!this.student.contact) {
      this.check = false;
      this.message3 = '<div class="alert alert-danger col-md-12">Enter Contact No</div>';
    }
    return this.check;
  }

  showAllStudents() {
    this.spinner.show();
    this.userService.getAllStudents()
      .subscribe(res => {
        this.studentList = res;
        console.log('studentList');
        console.log(this.studentList);
        this.spinner.hide();
      });
  }

  clear() {
    this.student.name = '';
    this.student.contact = '';
    this.student.email = '';
  }

  saveCustomer() {
    if (this.validation()) {
      this.spinner.show();
      this.userService.saveStudent(this.student)
        .subscribe(res => {
          this.showAllStudents();
          this.clear();
          this.spinner.hide();
        });
    }
  }


  deleteCustomer(index) {
    const c = confirm('Are You Sure??');
    if (c) {
      this.spinner.show();
      this.userService.deleteStudent(index)
        .subscribe(res => {
          this.showAllStudents();
          this.spinner.hide();
        });
    }
  }


  ngOnInit() {
    this.showAllStudents();
  }

}

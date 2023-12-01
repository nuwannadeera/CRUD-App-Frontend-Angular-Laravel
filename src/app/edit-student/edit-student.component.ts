import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserServiceService} from '../services/user-service.service';
import {Student} from '../model/student.m';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  selectedId: any;
  studentObj: Student = new Student();
  student: any;
  message1 = '';
  message2 = '';
  message3 = '';
  check: boolean;

  constructor(private userService: UserServiceService, private actRoute: ActivatedRoute,
              private spinner: NgxSpinnerService) {
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

  getSelectedStudentDetails() {
    this.spinner.show();
    this.userService.getSelectedStudentDetails(this.selectedId)
      .subscribe(res => {
        this.student = res;
        console.log('selected student');
        console.log(this.student);
        this.spinner.hide();
      });
  }

  updateCustomer() {
    if (this.validation()) {
      console.log('coming........');
      this.spinner.show();
      this.userService.updateStudent(this.student, this.selectedId)
        .subscribe(res => {
          this.spinner.hide();
        });
    }
  }


  ngOnInit() {
    this.selectedId = this.actRoute.snapshot.params.id;
    this.getSelectedStudentDetails();
  }

}

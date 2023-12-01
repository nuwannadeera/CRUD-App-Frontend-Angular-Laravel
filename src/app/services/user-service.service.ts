import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student.m';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAllStudents() {
    return this.http.get(this.apiUrl + '/students');
  }

  saveStudent(student: Student) {
    return this.http.post(this.apiUrl + '/saveStudent', student);
  }

  deleteStudent(index: any) {
    return this.http.delete(this.apiUrl + '/deleteStudent/' + index);
  }

  getSelectedStudentDetails(id) {
    return this.http.get(this.apiUrl + '/getOneStudentData/' + id);
  }

  updateStudent(student: Student, id) {
    return this.http.patch(this.apiUrl + '/updateStudentData/' + id, student);
  }

}

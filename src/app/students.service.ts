import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  getAllStudents() {
    return this.http.get('/students');
  }

  saveStudentData(data: any) {
    // console.log(data);
    return this.http.post('/students', data);
  }

  deleteStudent(id: any) {
    // console.log(id);
    return this.http.delete(`/students/${id}`);
  }

  getStudentById(id: any) {
    // console.log(id);
    return this.http.get(`/students/${id}`);
  }

  updateStudentData(id: any, data: any) {
    // console.log(id,data);
    return this.http.put(`/students/${id}`, data);
  }
}

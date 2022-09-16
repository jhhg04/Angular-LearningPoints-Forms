import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  constructor(
    private student: StudentsService,
    private router: ActivatedRoute
  ) {}

  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  message: boolean = false;

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);
    this.student
      .getStudentById(this.router.snapshot.params.id)
      .subscribe((result: any) => {
        // console.log(result);
        this.editStudent = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
        });
      });
  }

  UpdateData() {
    // console.log(this.editStudent.value);
    this.student
      .updateStudentData(this.router.snapshot.params.id, this.editStudent.value)
      .subscribe((result) => {
        // console.log(result);
        this.message = true;
      });
  }

  removeMessage() {
    this.message = false;
  }
}

import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from './../../../service/crud.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent {

  form!: FormGroup;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.createUser();
    if (this.id) {
      this.getUserId();
    }

  }

  createUser() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      role: [null, Validators.required],
    });
  }

  saveUser() {
    const user = this.form.value;
    if (!user) {
      return console.log(user);
    }
    if (this.id) {
      this.service.updateUser(this.id, user).subscribe({
        error: (e) => console.log(e),
        complete: () => this.cancel()
      })
    } else {
      this.service.createUser(user).subscribe({
        error: (e: any) => console.log(e),
        complete: () => this.cancel()
      })
    }
  }

  getUserId() {
    this.service.getUserById(this.id).subscribe((result: any) => {
      this.form.patchValue(result);
    })
  }

  cancel() {
    this.router.navigate(['/'])
  }

}

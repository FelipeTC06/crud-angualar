import { Router } from '@angular/router';
import { CrudService } from './../../../service/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent {

  users!: any

  constructor(
    private service: CrudService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe((result: any) => {
      this.users = result;
    })
  }

  editUser(id: number) {
    this.router.navigate([`/form/${id}`])
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe({
      error: (e) => console.log(e),
      complete: () => this.getUsers()
    })
  }

}

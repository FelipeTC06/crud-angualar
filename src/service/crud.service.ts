import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: any) {
    return this.http.post(`${this.url}`,user);
  }

  getUsers() {
    return this.http.get(`${this.url}`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateUser(id: number, newUser: any) {
    return this.http.put(`${this.url}/${id}`, newUser);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}

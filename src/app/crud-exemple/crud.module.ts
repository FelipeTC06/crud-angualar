import { CrudRoutingModule } from './crud-routing.module';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CrudListComponent,
    CrudFormComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
  ]
})
export class CrudModule { }

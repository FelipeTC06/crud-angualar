import { CrudRoutingModule } from './crud-routing.module';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CrudListComponent,
    CrudFormComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
  ],
})
export class CrudModule { }

import { CrudService } from './../../service/crud.service';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CrudService
  ],
})
export class CrudModule { }

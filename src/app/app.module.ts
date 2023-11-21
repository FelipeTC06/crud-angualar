import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudListComponent } from './crud-exemple/crud-list/crud-list.component';
import { CrudFormComponent } from './crud-exemple/crud-form/crud-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudListComponent,
    CrudFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

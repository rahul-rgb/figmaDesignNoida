import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { GraphComponent } from './graph/graph.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserDetailsComponent,
    DashboradComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ChartModule,
    PaginatorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

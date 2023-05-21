import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboradComponent},
  {path: 'signup', component: UserDetailsComponent},
  {path: 'chart', component: GraphComponent},
  {path: 'table', component: TableComponent},
  {
    path: '',
    redirectTo: "dashboard",
    pathMatch: 'full',
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

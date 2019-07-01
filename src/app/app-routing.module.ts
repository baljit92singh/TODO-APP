import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticComponent } from './statistic/statistic.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task' },
  { path: 'task', component: TaskComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: '**', redirectTo: 'task' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

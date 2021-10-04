import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataControlComponent } from './components/content/data-control/data-control.component';
import { GridComponent } from './components/content/grid/grid.component';

const routes: Routes = [
  {
    path: '', component: DataControlComponent
  },
  {
    path: 'autos-disponibles', component: GridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

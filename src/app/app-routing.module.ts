import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataControlComponent } from './components/content/data-control/data-control.component';

const routes: Routes = [
  {
    path: '', component: DataControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

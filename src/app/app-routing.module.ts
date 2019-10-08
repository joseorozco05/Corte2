import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiciosComponent} from './servicios/servicios.component';
import {BlogComponent} from './blog/blog.component'
import {LogRegComponent} from './log-reg/log-reg.component';
  import { from } from 'rxjs';


const routes: Routes = [
  {
    path: 'servicios',
    component:ServiciosComponent
  },
  {
    path: 'blog',
    component:BlogComponent
  },
  {
    path: 'logReg',
    component:LogRegComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

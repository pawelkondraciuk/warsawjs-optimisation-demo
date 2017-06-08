import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteOneComponent } from './route-one.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: '', component: RouteOneComponent },
      { path: 'child', loadChildren: './+child-one/child.module#ChildModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteOneRoutingModule { }

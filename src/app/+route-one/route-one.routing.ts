import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteOneComponent } from './route-one.component';
import { ChildComponent } from './+child';

const routes: Routes = [
  { 
    path: 'route-one',
    children: [
      { path: '', component: RouteOneComponent },
      { path: 'child', component: ChildComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteOneRoutingModule { }

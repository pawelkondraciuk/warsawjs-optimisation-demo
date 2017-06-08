import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteTwoComponent } from './route-two.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: '', component: RouteTwoComponent },
      { path: 'child', loadChildren: './+child-two/child.module#ChildModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteTwoRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteTwoComponent } from './route-two.component';
import { ChildComponent } from './+child';

const routes: Routes = [
  { 
    path: 'route-two',
    children: [
      { path: '', component: RouteTwoComponent },
      { path: 'child', component: ChildComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteTwoRoutingModule { }


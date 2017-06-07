import { NgModule } from '@angular/core';

import { RouteTwoComponent } from './route-two.component';
import { RouteTwoRoutingModule } from './route-two.routing';

import { ChildModule } from './+child';

@NgModule({
  imports: [
    RouteTwoRoutingModule,
    ChildModule
  ],
  declarations: [RouteTwoComponent]
})
export class RouteTwoModule { }

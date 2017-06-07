import { NgModule } from '@angular/core';

import { RouteOneComponent } from './route-one.component';
import { RouteOneRoutingModule } from './route-one.routing';

import { ChildModule } from './+child';

@NgModule({
  imports: [
    RouteOneRoutingModule,
    ChildModule
  ],
  declarations: [RouteOneComponent]
})
export class RouteOneModule { }

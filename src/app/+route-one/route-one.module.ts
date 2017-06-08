import { NgModule } from '@angular/core';

import { RouteOneComponent } from './route-one.component';
import { RouteOneRoutingModule } from './route-one.routing';

@NgModule({
  imports: [
    RouteOneRoutingModule,
  ],
  declarations: [RouteOneComponent]
})
export class RouteOneModule { }

import { NgModule } from '@angular/core';

import { RouteTwoComponent } from './route-two.component';
import { RouteTwoRoutingModule } from './route-two.routing';

@NgModule({
  imports: [
    RouteTwoRoutingModule,
  ],
  declarations: [RouteTwoComponent]
})
export class RouteTwoModule { }

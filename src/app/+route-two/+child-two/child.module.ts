import { NgModule } from '@angular/core';

import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child.routing';

@NgModule({
  imports: [ChildRoutingModule],
  declarations: [ChildComponent]
})
export class ChildModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child.routing';

@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule,
  ],
  declarations: [ChildComponent]
})
export class ChildModule { }

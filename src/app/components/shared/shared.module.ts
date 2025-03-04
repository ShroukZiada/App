import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedComponent

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,// Add FormsModule here
  ],
  exports: [SharedComponent] // Export the SharedComponent

})
export class SharedModule { }

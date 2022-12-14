import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {DeleteComponent} from "./delete/delete.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import {CreateComponent} from "./create/create.component";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,

  ]
})
export class ProductModule { }

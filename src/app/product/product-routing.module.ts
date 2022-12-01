import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeleteComponent} from "./delete/delete.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [{
  path: 'product/list',
  component: ListComponent
}, {
  path: 'product/create',
  component: CreateComponent
}, {
  path: 'edit/:id',
  component: EditComponent
}, {
  path: 'delete/:id',
  component: DeleteComponent
}, {
  path: 'detail/:id',
  component: DetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

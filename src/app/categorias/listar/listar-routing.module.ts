import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPage } from "./ListarPage";

const routes: Routes = [
  {
    path: '',
    component: ListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPageRoutingModule {}

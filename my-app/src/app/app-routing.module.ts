import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './components/load-product/list-item/list-item.component';
import { ListItem2Component } from './components/load-product/list-item-2/list-item-2.component';

const routes: Routes = [
  { path: 'item-1', component: ListItemComponent },
  { path: 'item-2', component: ListItem2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

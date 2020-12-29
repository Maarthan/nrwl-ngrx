import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { AddItemComponent } from './todo/add-item/add-item.component';
import { DisplayItemsComponent } from './todo/display-items/display-items.component';

const routes: Routes = [
  {path:'todo',children:[
    {path:'add',component:AddItemComponent},
    {path:'display',component:DisplayItemsComponent}
  ]},
  {path:'',redirectTo:'/todo/display',pathMatch:'full'},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './pages/shopping-list-edit/shopping-list-edit.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingModule { }

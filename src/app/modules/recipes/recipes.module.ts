import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './pages/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RecipesComponent
  ]
})
export class RecipesModule { }

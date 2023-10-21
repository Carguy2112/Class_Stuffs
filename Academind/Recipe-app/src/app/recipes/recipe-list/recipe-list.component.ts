import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe','test description','https://blog.thefruitcompany.com/wp-content/uploads/2012/12/IMG_1443-1024x764.jpg'),
    new Recipe('A second test recipe','test 2 description','https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/simple-savory-pork-chops-6ac84b.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

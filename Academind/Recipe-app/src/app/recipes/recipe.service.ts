import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Garlic Bread',
      'A simple but tasty garlic bread',
      'https://lh5.ggpht.com/A4AvBtkGH-ceUPIKh2AfAALKUd1UyYIwUOSfswsxGoKSJ9ZyVfZ3Sf16ztD8x4COb9nMHR7LNu2VubaTAlD6clc=w640-h640-c-rw-v1-e365',
      [
        new Ingredient('Italian bread', 1),
        new Ingredient('cloves garlic', 6),
        new Ingredient('salted butter (Tbsp.)', 6),
        new Ingredient('Italian parsley', 1),
      ]
    ),
    new Recipe(
      'Grilled Cheese Sandwich',
      'A classic!',
      'https://www.simplyrecipes.com/thmb/fQyfSBjMfOxtzT6lp8ye8-lx3AY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-cheese-social-how-to-basics-5723c5d85f9b589e348b2dfd.JPG',
      [
        new Ingredient('bread', 2),
        new Ingredient('cheese', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

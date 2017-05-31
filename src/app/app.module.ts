import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list-container/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list-container/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe-book/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

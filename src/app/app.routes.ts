import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { WordSorterComponent } from './word-sorter/word-sorter.component';
import { MixedLettersComponent } from './mixed-letters/mixed-letters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent}, //{path: "", component: CategoriesListComponent}
    {path: "admin", component: CategoriesListComponent},
    {path: "info", component: InfoComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "game-list",component: GameListComponent},
    {path: "word-sorter/:id", component: WordSorterComponent},
    {path: "mixed-letters/:id", component: MixedLettersComponent}
];

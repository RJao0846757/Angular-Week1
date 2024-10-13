import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { GameListComponent } from './app/game-list/game-list.component';
import { GameListItemComponent } from './app/game-list-item/game-list-item.component';
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path: '', redirectTo:"/game-list", pathMatch: 'full'},
  {path: 'game-list', component: GameListComponent},
  {path: 'game-list-item', component: GameListItemComponent},
  {path: 'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent} // 404 route
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

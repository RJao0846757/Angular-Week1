import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { GameListComponent } from './app/game-list/game-list.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path: '', redirectTo:"/game-list", pathMatch: 'full'},
  {path: 'game-list', component: GameListComponent},
  {path: 'game-list-item', loadComponent: () =>
      import('./app/game-list-item/game-list-item.component').then(m => m.GameListItemComponent)},
  {path: 'modify-list-item', loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**', loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then((m => m.PageNotFoundComponent))} // 404 route
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { GameListComponent } from './app/game-list/game-list.component';
import { GameListItemComponent } from './app/game-list-item/game-list-item.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path: 'app/game-list/', component: GameListComponent},
  {path: 'app/game-list/', component: GameListItemComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
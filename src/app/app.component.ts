import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { Game } from './models/game';
import {NgForOf, NgIf} from "@angular/common";
import { GameListComponent } from "./game-list/game-list.component";
import { GameListItemComponent } from "./game-list-item/game-list-item.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListComponent, GameListItemComponent, RouterLink, RouterLinkActive, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assignment 1';
  name = 'Ralph-Julien Jao';

  game1 : Game = {id: 1, name : "TestGame", price : 59.99, releaseDate : "09/19/24", developer : "SoloDev"};
  game2 : Game = {id: 2, name : "BlockGame", price : 39.99, releaseDate : "02/18/18", developer : "BigTeam", publisher: "BigCo"};
  game3 : Game = {id: 3, name : "Skyrim", price : 59.99, releaseDate : "11/11/11", developer : "Bethesda"};
  game4 : Game = {id: 4, name : "FortGame", price : 0.00, releaseDate : "07/25/17", developer : "Legendary Studios", publisher: "Legendary Games"};
  game5 : Game = {id: 5, name : "GameGame", price : 79.99, releaseDate : "12/15/19", developer : "Game Studios", publisher : "Game Publishing"};
  game6 : Game = {id: 6, name : "Star Game 2 (2005)", price : 29.99, releaseDate : "10/28/05", developer : "Epidemic Studios", publisher : "LukeArts"};

  gameList : Game[] = [this.game1, this.game2, this.game3, this.game4, this.game5, this.game6];
}

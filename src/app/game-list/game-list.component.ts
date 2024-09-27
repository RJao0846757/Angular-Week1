import { Component } from '@angular/core';
import { Game } from '../models/game';
import { GameListItemComponent } from "../game-list-item/game-list-item.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItemComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  gameListObj1 : Game = {name: "Among Us", price: 4.99, releaseDate: "06/15/18", developer: "Innersloth"};
  gameListObj2 : Game = {name: "Red Dead Redemption 2", price: 79.99, releaseDate: "10/26/18", developer: "Rockstar Games"};
  gameListObj3 : Game = {name: "Ace Combat 7: Skies Unknown", price: 59.99, releaseDate: "01/18/19", developer: "Bandai Namco Studios", publisher: "Bandai Namco Entertainment"};
  gameListObj4 : Game = {name : "Not A Real Game", price : 0.00, releaseDate : "01/01/00", developer : "Imaginary Developers"};

  gameArray : Game[] = [this.gameListObj1, this.gameListObj2, this.gameListObj3, this.gameListObj4];
}

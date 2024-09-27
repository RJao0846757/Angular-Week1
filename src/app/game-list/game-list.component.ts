import { Component } from '@angular/core';
import { Game } from '../models/game';
import { GameListItemComponent } from "../game-list-item/game-list-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItemComponent, CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  gameListObj1 : String = "Among us";
  gameListObj2 : String = "Red Dead Redemption 2";
  gameListObj3 : String = "Ace Combat 7: Skies Unknown";
  gameListObj4 : String = "Not A Real Game";

  gameArray : String[] = [this.gameListObj1, this.gameListObj2, this.gameListObj3, this.gameListObj4];
}

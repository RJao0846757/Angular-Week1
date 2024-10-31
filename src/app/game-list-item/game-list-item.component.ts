import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {GameService} from "../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './game-list-item.component.html',
  styleUrl: './game-list-item.component.scss'
})
export class GameListItemComponent {
  @Input() gameData: any;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  updateGame(gameId: number) {
    this.router.navigate(['/modify-list-item']);
  }

  deleteGame(gameId: number) {
    this.gameService.deleteGame(gameId);
  }
}

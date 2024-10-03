import { Component, OnInit } from '@angular/core';
import { GameListItemComponent } from "../game-list-item/game-list-item.component";
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItemComponent, CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  constructor(private gameService: GameService) {}
  gameArray: Game[] = [];

  ngOnInit() {
    this.gameService.getGameArray().subscribe({
      next: (data: Game[]) => this.gameArray = data,
      error:err => console.error("Error Ocurred: ", err),
      complete:() => console.log("fetch complete.")
    })
  }
}
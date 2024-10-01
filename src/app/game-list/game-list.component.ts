import { Component } from '@angular/core';
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

}
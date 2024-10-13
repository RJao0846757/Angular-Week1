import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './game-list-item.component.html',
  styleUrl: './game-list-item.component.scss'
})
export class GameListItemComponent {
  @Input() gameData: any;
}

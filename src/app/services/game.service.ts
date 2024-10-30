import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { gameArray } from '../game-list/data/mock-content';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  // Method to get game array from mock-content
  getGameArray(): Observable<Game[]>{
    return of(gameArray);
  }

  // Method to find game
  getGameById(gameId: number): Observable<Game | undefined>{
    const game = gameArray.find(game => game.id === gameId);
    return of(game);
  }

  // Method that adds a game to the game array, then returns array
  addGame(newGame: Game): Observable<Game[]>{
    gameArray.push(newGame);
    return of(gameArray);
  }

  // Method that updates a game in game array, then returns array
  updateGame(gameUpdate: Game): Observable<Game[]>{
    const index = gameArray.findIndex(game => game.id === gameUpdate.id);
    if (index !== -1) {
      gameArray[index] = gameUpdate;
    }
    return of(gameArray);
  }

  // Method to delete a game from the game array, then returns game that was removed
  deleteGame(gameId: number): Observable<Game | undefined>{
    const index = gameArray.findIndex(game => game.id === gameId);
    let deletedGame: Game | undefined;
    let deletedGameArr: Game[];
    if (index !== -1) {
      deletedGameArr = gameArray.splice(index, 1);
      deletedGame = deletedGameArr[0];
    }
    return of(deletedGame);
  }
}

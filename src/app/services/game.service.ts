import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { gameArray } from '../game-list/data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  getGameArray(): Observable<String[]>{
    return of(gameArray);
  }
}

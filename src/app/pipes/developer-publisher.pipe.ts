import { Pipe, PipeTransform } from '@angular/core';
import {Game} from "../models/game";

@Pipe({
  name: 'developerPublisher',
  standalone: true
})
export class DeveloperPublisherPipe implements PipeTransform {

  transform(game: Game): String {
    if (game.publisher) {
      return `Developed by ${game.developer}, published by ${game.publisher}`;
    } else {
      return `Developed by ${game.developer}`;
    }
  }

}

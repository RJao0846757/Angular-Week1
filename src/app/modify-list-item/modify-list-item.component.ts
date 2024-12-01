import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {GameService} from "../services/game.service";
import {Game} from "../models/game";
import {gameArray} from "../game-list/data/mock-content";
import {Router} from "@angular/router";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {
  gameForm: FormGroup;
  game: Game | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private router: Router
  ) {
    this.gameForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      releaseDate: ['', Validators.required],
      developer: ['', Validators.required],
      publisher: [''],
      image: ['']
    })
  }

  onSubmit() {
    const game: Game = this.gameForm.value;

    // Checks to see if this is for updating a game
    if (game.id) {
      this.gameService.updateGame(game);
    } else {
      // Adds new game
      game.id = (gameArray.length + 1);
      this.gameService.addGame(game);
    }

    this.router.navigate(['/']);
  }

  onDelete() {
    const id = this.gameForm.get('id')?.value;
    if (id) {
      this.gameService.deleteGame(id);
      this.router.navigate(['/']);
    }
  }
}

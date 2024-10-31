import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {
  gameForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
}

import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de idade`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => a.id !== animal.id);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }
}

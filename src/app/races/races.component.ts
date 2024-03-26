/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [NgFor],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {
  races: Array<RaceModel> = [{ id: 1, name: 'Lyon' }, { id: 2, name: 'London' }];
}

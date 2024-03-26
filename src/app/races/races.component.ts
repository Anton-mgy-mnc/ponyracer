/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { NgFor } from '@angular/common';
import { RaceComponent } from "../race/race.component";
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  standalone: true,
  templateUrl: './races.component.html',
  styleUrl: './races.component.css',
  imports: [NgFor, RaceComponent]
})
export class RacesComponent {

  races: Array<RaceModel> = [];

  constructor(private _raceService: RaceService) {

    this._raceService.list().subscribe(races =>
      (this.races = races)
    );

  }


}

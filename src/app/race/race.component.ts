/* eslint-disable prettier/prettier */
import { Component, Input } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { PonyComponent } from "../pony/pony.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pr-race',
  standalone: true,
  templateUrl: './race.component.html',
  styleUrl: './race.component.css',
  imports: [PonyComponent, DatePipe]
})
export class RaceComponent {
  @Input({ required: true }) raceModel!: RaceModel;



}

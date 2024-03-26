/* eslint-disable prettier/prettier */
import { PonyModel } from './pony.model';

/* eslint-disable prettier/prettier */
export interface RaceModel {
    id: number,
    name: string,
    ponies: Array<PonyModel>;
    startInstant: string,
}

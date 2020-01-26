import { Players } from './models/players.model';

export interface AppState {
  readonly players: Players[];
}
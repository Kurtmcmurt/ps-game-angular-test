import { Action } from 'rxjs/internal/scheduler/Action';
import { Players } from './../models/players.model';
import * as PlayersActions from './../actions/players.actions';
import { InitialState } from '@ngrx/store/src/models';

const initialState: Players = {
  players: [
    {
      name: 'Player 1',
      score: 0,
      type: 'human'
    },
    {
      name: 'Terry',
      score: 0,
      type: 'computer'
    }
  ]
}

export function playersReducer(state: Players[] = [initialState], action: PlayersActions.Actions ) {
  return [...state, action.payload];
}
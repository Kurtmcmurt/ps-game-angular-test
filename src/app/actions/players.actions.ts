import { Action } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { Players } from './../models/players.model';

export const SET_PLAYER_NAME = '[PLAYERS] Add Human Name';

export class SetPlayerName implements Action {
  readonly type = SET_PLAYER_NAME;

  constructor( public payload: Players ) {}
}

export type Actions = SetPlayerName

// export const human = createAction('[Game Component] Human');
// export const computer = createAction('[Game Component] Computer');
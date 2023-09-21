import {TState} from "../types";

export const usersSelector = (state: TState) => (state.users);
export const activeUserSelector = (state: TState) => (state.activeUser);

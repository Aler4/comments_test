import {User} from "../types";

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_ALL = 'REMOVE_ALL';
export const CHOOSE_ACTIVE = 'CHOOSE_ACTIVE';
export const ADD_COMMENT = 'ADD_COMMENT';

export const addUser = (data: User) => ({data, type: ADD_USER});
export const removeUser = (data: User) => ({data, type: REMOVE_USER});
export const removeAll = (data: User) => ({data, type: REMOVE_ALL});
export const chooseActive = (data: User) => ({data, type: CHOOSE_ACTIVE});
export const addComment = (data: Comment) => ({data, type: ADD_COMMENT });

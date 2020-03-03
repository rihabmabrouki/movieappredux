import {
  ADD_MOVIE,
  SEARCH_INPUT,
  SEARCH_RATING,
  REMOVE_MOVIE,
  EDIT_MOVIE
} from "./actiontype";

export function addmovie(movie) {
  return { type: ADD_MOVIE, payload: movie };
}

export function searchinput(input) {
  return { type: SEARCH_INPUT, payload: input };
}

export function searchrating (rate){
return {type: SEARCH_RATING , payload : rate}}

export function removemovie(id) {
  return { type: REMOVE_MOVIE,  id };
}

export function editmovie(payload) {
  return { type: EDIT_MOVIE, payload };
}

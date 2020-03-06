import React from 'react';
import Home from './App/containers/Home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mockMovies from './App/mockMovies';

function addMovies(state,{movies}){
  return movies.map(movie=>({
    Title:movie.Title,
    Poster:movie.Poster,
    imdbID:movie.imdbID,
  }))
}
function movieReducer(state = mockMovies.Search, action) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return addMovies(state, action.payload)
    default:
      return state
  }
}
const store = createStore(movieReducer)

export default () => (
  <Provider store={store}>
    < Home />
  </Provider>
)

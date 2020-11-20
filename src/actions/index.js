export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMovie = (id) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: {
    id,
  },
});

export const FAVORITES_ADD_MOVIE = 'FAVORITES_ADD_MOVIE';
export const FAVORITES_REMOVE_MOVIE = 'FAVORITES_REMOVE_MOVIE';

export const addMovieToFavorites = (id) => ({
  type: FAVORITES_ADD_MOVIE,
  payload: id,
});

export const removeMovieFromFavorites = (id) => ({
  type: FAVORITES_REMOVE_MOVIE,
  payload: id,
});

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMovies = (query) => ({
  type: SEARCH_MOVIES_REQUEST,
  payload: {
    query,
  },
});

export const SEARCH_MOVIES_UPDATE_QUERY = 'SEARCH_MOVIES_UPDATE_QUERY';

export const updateSearchMoviesQuery = (value) => ({
  type: SEARCH_MOVIES_UPDATE_QUERY,
  payload: value,
});

export const SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH =
  'SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH';

export const prepareForNewSearchMovies = () => ({
  type: SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH,
});

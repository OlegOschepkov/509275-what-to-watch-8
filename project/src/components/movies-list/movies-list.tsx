import {Movies} from '../../types/types';
import SmallMovieCard from '../small-movie-card/small-movie-card';

type MoviesListProps = {
  movies: Movies
}

function MoviesList({movies}: MoviesListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        movies.map((singleMovie) => <SmallMovieCard movie={singleMovie} key={singleMovie.id} />)
      }
    </div>
  );
}

export default MoviesList;

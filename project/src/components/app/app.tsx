import MainScreen from '../main/main';
import {Movie, Movies} from '../../types/types';

type AppScreenProps = {
  promo: Movie;
  movies: Movies;
}

function App({promo, movies}: AppScreenProps): JSX.Element {
  return (
    <MainScreen promo={promo} movies={movies} />
  );
}

export default App;

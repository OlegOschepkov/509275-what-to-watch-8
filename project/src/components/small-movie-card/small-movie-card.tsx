import {Movie} from '../../types/types';

type MovieCardProps = {
  movie: Movie
}

function SmallMovieCard({movie}: MovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={movie.previewImg} alt={movie.alt} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="#">{movie.name}</a>
      </h3>
    </article>
  );
}

export default SmallMovieCard;

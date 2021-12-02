import {Movie} from '../../types/types';
import Logo from '../logo/logo';

type FilmCardHeaderProps = {
  movie: Movie
}

function FilmCardHeader({movie}: FilmCardHeaderProps): JSX.Element {
  return (
    <div className='film-card__header'>
      <div className='film-card__bg'>
        <img src={movie.bgPoster} alt={movie.alt}/>
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <header className='page-header'>
        <Logo />
        <nav className='breadcrumbs'>
          <ul className='breadcrumbs__list'>
            <li className='breadcrumbs__item'>
              <a href='film-page.html' className='breadcrumbs__link'>{movie.name}</a>
            </li>
            <li className='breadcrumbs__item'>
              <a className='breadcrumbs__link'>Add review</a>
            </li>
          </ul>
        </nav>

        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img src='img/avatar.jpg' alt='User avatar' width='63' height='63'/>
            </div>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link'>Sign out</a>
          </li>
        </ul>
      </header>

      <div className='film-card__poster film-card__poster--small'>
        <img src={movie.poster} alt={movie.alt} width='218' height='327'/>
      </div>
    </div>
  );
}

export default FilmCardHeader;

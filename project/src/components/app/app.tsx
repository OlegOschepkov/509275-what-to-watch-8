import MainScreen from '../main/main';
import {Movie, Movies} from '../../types/types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/const';
import React from 'react';
import Login from '../login/login';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import {promoMock} from '../../mock/mock';
import PrivateRoute from '../private-route/private-route';
import MyList from '../mylist/my-list';

type AppScreenProps = {
  promo: Movie;
  movies: Movies;
}

function App({promo, movies}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen promo={promo} movies={movies} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        {/*<Route exact path={AppRoute.MyList}>*/}
        {/*  <MyList movies={movies} />*/}
        {/*</Route>*/}
        <Route exact path={AppRoute.Film}>
          <Film promoMock={promoMock} />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} authorizationStatus={AuthorizationStatus.NoAuth} render={() => <MyList movies={movies} />} >
        </PrivateRoute>
        <Route exact path={AppRoute.AddReview}>
          <AddReview  promoMock={promoMock} />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

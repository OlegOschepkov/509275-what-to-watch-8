import MainScreen from '../main/main';
import {Movie, Movies} from '../../types/types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/const';
import React from 'react';
import Login from '../login/login';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import MyList from '../mylist/my-list';
import NotFound from '../not-found/not-found';

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
        <Route exact path={AppRoute.MyList}>
          <MyList movies={movies} />
        </Route>
        <Route exact path={AppRoute.Film} render={({match}) => {
          const {id}: any = match.params;
          return <Film movie={movies[id]} />;
        }}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          authorizationStatus={AuthorizationStatus.NoAuth}
          render={() => <MyList movies={movies} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.AddReview} render={({match}) => {
          const {id}: any = match.params;
          return <AddReview movie={movies[id]} />;
        }}
        >
        </Route>
        <Route exact path={AppRoute.Player} render={({match}) => {
          const {id}: any = match.params;
          return <Player movie={movies[id]} />;
        }}
        >
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

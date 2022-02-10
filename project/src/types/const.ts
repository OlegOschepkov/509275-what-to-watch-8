export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/my-list',
  Film = '/films/:id',
  AddReview = '/films/:id/add-review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

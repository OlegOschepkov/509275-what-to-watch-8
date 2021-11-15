import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {promoMock, moviesMock} from './mock/mock';

ReactDOM.render(
  <React.StrictMode>
    <App promo={promoMock} movies={moviesMock} />
  </React.StrictMode>,
  document.getElementById('root'));

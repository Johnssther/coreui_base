import React from 'react';
import ReactDOM from 'react-dom';
import Informegastos from './Informegastos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Informegastos />, div);
  ReactDOM.unmountComponentAtNode(div);
});

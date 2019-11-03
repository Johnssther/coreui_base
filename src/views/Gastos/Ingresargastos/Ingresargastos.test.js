import React from 'react';
import ReactDOM from 'react-dom';
import Ingresargastos from './Ingresargastos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ingresargastos />, div);
  ReactDOM.unmountComponentAtNode(div);
});

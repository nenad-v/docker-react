import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('runs this test also', () => {
    expect('foo').toBe('foo');
});

it('another test', () => {
    expect('foo').toBe('foo');
});
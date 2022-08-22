import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Bookstore</h1>
          <div>A sua livraria virtual</div>
        </a>
      </div>
      <div>
        <a href="#/cart">
        Carrrinho{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Cadastro</a>
      </div>
    </header>
  );
}

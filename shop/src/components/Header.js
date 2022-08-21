import React from 'react';

export default function Header (props) {

return (
<header className=" row block center">
    <div>
        <a href="#/" >
            <h1>Bookstore</h1>
            <div className="subtitulo">A sua livraria virtual</div>
        </a>
    </div>
    <div>
        <a href="#/cart">Carrrinho</a> <a href="#/Sign In">Cadastro</a>
    </div>
</header>
)
}
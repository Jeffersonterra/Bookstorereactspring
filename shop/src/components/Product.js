import React from 'react';

export default function Product(props) {
  const { product, onAdd, onRemove } = props;
  
  return (
      <div>
        <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h5>Autor : {product.author}</h5>
      <h5>Editora : {product.editor}</h5>
      <h5>Estoque : {product.stock}</h5>
      <h3>R${product.price}</h3>
        <button onClick={onAdd}>Adicione ao carrinho</button>
        <button  className="red" onClick={onRemove}>Remova do carrinho</button>
      </div>
    </div>
  );
}

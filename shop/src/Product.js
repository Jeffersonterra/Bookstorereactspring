import React from 'react';



export default function Product(props){
  
  
  
  const { product, onAdd  } = props;
  
  
  function clickHandler(){
    
    product.stock --;
    if (product.stock === -1){
      alert('Produto fora de estoque ajuste carrinho para prosseguir!' );
      
    }
   
  }
  function aumentoestoque(){
    
    product.stock ++;
   
   
  }

  
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h5>Autor : {product.author}</h5>
      <h5>Editora : {product.editor}</h5>
      <h5>Estoque : {product.stock}</h5>
    
      <h3>R${product.price}</h3>
      <div>
      
        <button onClick={() =>{onAdd(product);clickHandler()}}>Adicione ao carrinho</button>
         {/*<button  className="red" onClick={() =>{aumentoestoque()}} >Remova do carrinho</button>*/} 
      </div>
    </div>
  );
}

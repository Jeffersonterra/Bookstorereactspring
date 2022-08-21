

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './components/data';
import {useState} from 'react';
function App() {
  const{products} = data;
const [cartItems, setCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};


  return (
    <div className="App">
     <Header></Header>
     {/*<div className="row">
      </div> emcapsular basket e products
      */}
     <Main products= {products}></Main>
     <Basket onAdd={onAdd} cartItems={cartItems}></Basket>
     </div>
  );
}

export default App;

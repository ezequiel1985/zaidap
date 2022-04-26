import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from "react";
import { CartContextProvider} from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
           </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

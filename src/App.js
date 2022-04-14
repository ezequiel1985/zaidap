import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
           <Route path='/' element={<ItemListContainer/>}/>
           <Route path='/category/:categoryId' element={<ItemListContainer />} />
           <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

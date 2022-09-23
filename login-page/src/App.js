
import { Route, Routes } from 'react-router-dom';
import { Authorization } from './Auth/auth';
import { About } from './Carts/About/about';
import { Bag } from './Carts/Bag/bag';
import Carts from './Carts/carts';
import Items from './Carts/Items/items';
import { Products } from './Carts/Products/products';
import { Login, LoginProvider } from './Login/login';

function App() {
  return (
    <LoginProvider>
    <Routes>
     <Route path="/" element={<Carts/>}>
     <Route index element={<Login/>}/>
     <Route path='/' element={
      <Authorization>
        <Products/>
      </Authorization>
     }/>
     <Route path='/about' element={<About/>}/>
     <Route path='/bag' element={<Bag/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/products/:id' element={<Items/>}/>
     </Route>
    </Routes>
    </LoginProvider>
  );
}

export default App;

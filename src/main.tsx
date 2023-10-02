import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import App from './App.tsx' ; 
import './index.css' ;
import { RouterProvider, createBrowserRouter } from 'react-router-dom' ;
import LayoutMain from './components/layouts/LayoutMain.tsx' ;
import Home from "./pages/home/home.tsx"  ;
import Cart from './pages/Cart/Cart.tsx' ;
import { CartProvider } from './context/CartProvider.tsx';

const router = createBrowserRouter ([ 
  {
    path: "/" ,
    element : <LayoutMain /> ,
    children : [
      { index : true , element : <Home /> },
      { path : "/cart" , element : <Cart />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */ }
    <CartProvider>
      <RouterProvider router={router}> 
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>,
)

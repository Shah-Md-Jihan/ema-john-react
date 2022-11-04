import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://127.0.0.1:5000/products'),
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: () => fetch('http://127.0.0.1:5000/products'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element:
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
        },
        {
          path: 'shipping',
          element:
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },

        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/register",
          element: <SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

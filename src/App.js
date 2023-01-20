import Home from './pages/Home';
import Products from './pages/Products';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', element: <Home />
  },
  {
    path: '/products', element: <Products />
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
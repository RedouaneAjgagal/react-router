import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

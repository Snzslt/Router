import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';
//https://example.com/products/


const router = createBrowserRouter([
  {path: '/',
  element: <RootLayout/>,
  errorElement : <ErrorPage />,
  children: [
    {index: true, element: <HomePage />},
    {path: '/products', element: <ProductPage/>},
    {path: '/product/:productId', element: <ProductDetailPage />}
  ],
},
]);
// const routeDefinitions = createRoutesFromElements(
// <Route>
// <Route path="/" element={<HomePage />} />
// <Route path="/products" element={<Productspage />} />
// </Router>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

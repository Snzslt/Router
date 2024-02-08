import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
//https://example.com/products/


const router = createBrowserRouter([
  {path:'/', element: <HomePage />},
  {path: '/products', element: <ProductPage/>}
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

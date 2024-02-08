import {Link} from 'react-router-dom';
const PRODUCTS = [
    {id: 'p1', title: 'Product1'},
    {id: 'p2', title: 'Product2'},
    {id: 'p3', title: 'Product3'}
];
function ProductPage(){
    return (
    <>
    <h1>Product page</h1>
    <ul>
    {
    /* <li><Link to="/products/product-1">Product 1</Link></li>
    <li><Link to="/products/product-1">Product 2</Link></li>
    <li><Link to="/products/product-1">Product 3</Link></li> */
    
    PRODUCTS.map((prod) => (<li key={prod.id}><Link to={`/product/${prod.id}`}>{prod.title}</Link></li>))
    }
    
    </ul>
    </>)
}
export default ProductPage;
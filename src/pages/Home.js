import {Link, useNavigate} from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate();
//we use this when for example want to work with timer
    function navigateHandler(){
    navigate('/products');
    }

    return (
        <>
        <h1>My Home Page</h1>
        <p>
            Go to the <Link to="/products">Products</Link>.
        </p>
        <p>
            <button onClick={navigateHandler}>
                Navigate</button>
        </p>
        </>
    )
    
    
}
export default HomePage;
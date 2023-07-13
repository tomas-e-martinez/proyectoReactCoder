import { useNavigate, useParams } from 'react-router-dom';
import ItemDetails from '../../components/Products/ItemDetails/ItemDetails'
import './styles.css'
import { API_URLS } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';

function ProductDetails () {
    const { productId } = useParams();
    const navigate = useNavigate();
    const urlProductDetails = `${API_URLS.PRODUCTS.url}/${productId}`
    console.log({productId})

    const {data , loading, error} = useFetch(urlProductDetails, API_URLS.PRODUCTS.config);
    const history = window.history;
    return (
        <>
        <div className='headerDetailsContainerDiv'>
          <div className='headerDetailsContainer'>
            {history.length > 2 ? (<button onClick={() => navigate(-1)}className='backButton'>← Volver</button>) : null}
            <h2 className='headerDetailsCardContainer'>Detalles del producto</h2></div>
            {loading && (<div className='loaderContainer'><Loader /></div>)}
            <ItemDetails {...data}/>
        </div>
        </>
    )
}

export default ProductDetails
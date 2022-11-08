import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import productStyle from './ShowAll.module.css'

const ShowAll = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {return (setProducts(response.data));})
            .catch(err => console.log("error", err))
    }, [])
    return (
        <div>
            {
            products.map((product) => {
                return(<div key={product._id} className={productStyle.product}>
                        <Link to={"/products/" + product._id}>{product.title}</Link>
            
                        {/* <ShowAll/>
            <ShowOne/> */}
                    </div>);

                })
            }
        </div>
    )
}

export default ShowAll
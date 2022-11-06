import axios from 'axios';
import {useState,useEffect} from 'react';
import './App.css';
import ProductForm from './components/ProductForm';

function App() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
    .then(response=>{
      console.log(response.data);
      return(setProducts(response.data));
    })
    .catch(err=>console.log("error",err))
  },[])
  return (
    <div className="App">
      <ProductForm/>
      <h1>All Products</h1>
      <div>
        {
        products.map((product)=>{
          return(<div key={product._id}>
            <p>title:{product.title}</p>
            <p>price:{product.price}</p>
            <p>description:{product.description}</p>
          </div>);
            
          })
        }
      </div>
      
    </div>
  );
}
export default App;

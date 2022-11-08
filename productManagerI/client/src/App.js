import './App.css';
import ProductForm from './components/ProductForm';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';
import { Routes, Route,Link,Navigate } from 'react-router-dom';
import Update from './components/Update';

function App() {

  return (
    <div className="App">
      <Link to={"/products"}>All Products</Link>
      <Link to={"/"} style={{"margin":"100px"}}>Create Product </Link>
      <hr />
      <Routes>
        {/* <Route element={<Main />} path="/people/" /> */}
        <Route element={<ShowOne />} path="/products/:id" />
        <Route element={<ProductForm /> } path="/"/>
        <Route element={ <ShowAll />} path="/products"/>
        <Route element={<Update/>} path="/products/:id/edit"/>
        <Route path="*" element={<Navigate to={"/"} replace/>}/>
      </Routes>
    </div>
  );
}
export default App;

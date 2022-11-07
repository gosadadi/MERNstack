import './App.css';
import ProductForm from './components/ProductForm';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <ProductForm />
      <hr />
      <h1>All Products</h1>
      <ShowAll />
      <Routes>
        {/* <Route element={<Main />} path="/people/" /> */}
        <Route element={<ShowOne />} path="/products/:id" />
        </Routes>
    </div>
  );
}
export default App;

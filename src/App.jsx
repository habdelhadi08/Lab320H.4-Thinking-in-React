
import './App.css'
import FilterableProductTable from './components/FilterableProductTable/index'
import SearchBar from './components/SearchBar'
import { products } from './data/products'

function App() {

  return (
    <>
    <FilterableProductTable products={products} />;

   
    
    </>
  )
}

export default App



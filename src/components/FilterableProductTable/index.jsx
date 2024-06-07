import { useState } from "react";
import SearchBar from '../SearchBar/index.jsx'
import { products } from '../../data/products.js';
import ProductTable from '../ProductTable/index.jsx'

function FilterableProductTable({ products }) {
  const[filterText, setFilterText]= useState('')
  const[inStockOnly,setInstockOnly]= useState(false)
    return (
      <div>
        <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInstockOnly}/>
        <ProductTable products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly}/>
      </div>
    );
  }
  export default FilterableProductTable;
import { useState } from "react";
function SearchBar({onFilterTextChange,filterText,inStockOnly,onInStockOnlyChange}) {
  // const[filterText, setFilterText]= useState('')
    return (
      <form>
        <input type="text" 
        value={filterText}
        placeholder="Search..." 

onChange={(e)=> onFilterTextChange(e.target.value)}/>
        <label>
          <input type="checkbox" checked={inStockOnly} onChange={()=>onInStockOnlyChange(!inStockOnly)}/>
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
  export default SearchBar;
import { useState } from 'react';
import SearchBar from "./search";
import ProductTable from "./product-table";
import type { Product } from "./types";

interface FilterableProductTableProps {
  products: Product[];
}

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
}
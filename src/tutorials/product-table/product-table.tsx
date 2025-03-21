import type { JSX } from "react/jsx-runtime";
import ProductCategoryRow from "./product-category-row";
import ProductRow from "./product-row";
import type { Product } from "./types";

export default function ProductTable({ products, filterText, inStockOnly }: { filterText: string, inStockOnly: boolean, products: Product[] }) {
    const rows: JSX.Element[] = [];
    let lastCategory: string | null = null;
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}
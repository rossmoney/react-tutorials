import type { ReactElement } from "react";
import Layout from "../../src/layouts/tutorials";
import type { NextPageWithLayout } from "../_app";

import FilterableProductTable from "../../src/product-table/filterable-product-table";

const Page: NextPageWithLayout = () => {
  return <FilterableProductTable products={PRODUCTS} />;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

const PRODUCTS = [
  {id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

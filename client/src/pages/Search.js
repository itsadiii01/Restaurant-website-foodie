import React from "react";

import { useSearch } from "../context/search";
import Layout from "../component/La/Layout";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
    <div className="container mx-auto">
  <div className="text-center">
    <h1 className="text-2xl font-bold">Search Results</h1>
    <h6>
      {values?.results.length < 1
        ? "No Products Found"
        : `Found ${values?.results.length}`}
    </h6>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {values?.results.map((p) => (
        <div key={p._id} className="rounded-lg shadow-md overflow-hidden">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
            className="w-full h-64 object-cover"
            alt={p.name}
          />
          <div className="p-4">
            <h5 className="text-lg font-bold mb-2">{p.name}</h5>
            <p className="text-sm text-gray-700 mb-4">{p.description.substring(0, 30)}...</p>
            <p className="text-lg font-semibold">$ {p.price}</p>
            <div className="mt-4">
              <button className="btn-primary mt-2 px-4 py-2 rounded-md hover:bg-blue-700">
                More Details
              </button>
              <button className="btn-secondary mt-2 px-4 py-2 rounded-md hover:bg-gray-700">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </Layout>
  );
};

export default Search;
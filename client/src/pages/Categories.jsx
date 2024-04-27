
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategories";
import Layout from "../component/La/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
  <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {categories.map((c) => (
      <div className="mt-5 mb-3" key={c._id}>
        <Link to={`/category/${c.slug}`} className="inline-block  bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full">
          {c.name}
        </Link>
      </div>
    ))}
  </div>
</div>

    </Layout>
  );
};

export default Categories;
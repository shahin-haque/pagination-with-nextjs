import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
  return (
    <article className="SingleProduct">
      <h3>
        {product.id}: <Link href={`/${product.id}`}> {product.title}</Link>
      </h3>
      <hr />
    </article>
  );
};

export default SingleProduct;

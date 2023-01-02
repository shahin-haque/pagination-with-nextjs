import Image from 'next/image';
import { useState } from 'react';
import PaginateBtn from '../components/PaginateBtn';
import SingleProduct from '../components/SingleProduct';

export default function Home({ product }) {
  const [productPage, setProductPage] = useState(1);
  if (!product) {
    return <h1>Loading....</h1>;
  }
  const ProductPerPage = 6;
  const LastProduct = ProductPerPage * productPage;
  const FirstProduct = LastProduct - ProductPerPage;

  const PageBtn = Math.ceil(product.length / ProductPerPage);
  return (
    <>
      <main>
        <div className="img">
          <Image
            src="/undraw.svg"
            alt="illustration"
            width={300}
            height={300}
          />
          <h1>Pagination with Nextjs</h1>
        </div>
        <section className="SingleProductContainer">
          {product
            .map((product) => (
              <SingleProduct
                key={product.id}
                product={product}
                PageBtn={PageBtn}
              />
            ))
            .slice(FirstProduct, LastProduct)}
        </section>
      </main>
      <PaginateBtn PageBtn={PageBtn} setProductPage={setProductPage} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

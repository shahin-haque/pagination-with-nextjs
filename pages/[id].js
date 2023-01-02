import Link from 'next/link';

const SelectedItem = ({ product }) => {
  return (
    <article>
      <h2>
        {product.id}: {product.title}
      </h2>
      <p>{product.body}</p>

      <hr />
      <br />
      <button>
        <Link href="/">Previous Page</Link>
      </button>
    </article>
  );
};

export default SelectedItem;

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const product = await res.json();

  const paths = product.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

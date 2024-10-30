// Código em inglês
import { useState } from "react";

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: "Macarrão",
    price: "R$ 25,00",
  },
  {
    title: "Hamburger",
    price: "R$ 30,00",
  },
];

export function ListProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  function searchProduct(productTitle: string) {
    const filteredProducts = productList.filter((product) =>
      product.title.includes(productTitle)
    );

    setProducts(filteredProducts);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => searchProduct(event.target.value)}
      />

      {products.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

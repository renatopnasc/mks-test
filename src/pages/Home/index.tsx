import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { Card } from "../../components/Card";

import { useQuery } from "react-query";
import { useState } from "react";

import { SkeletonLoader } from "../../components/SkeletonLoader";

interface ProductsProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface ProductsCartProps {
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

export function Home() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [productsOnCart, setProductsOnCart] = useState<ProductsCartProps[]>([]);

  const { isLoading } = useQuery("repoData", () =>
    fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC"
    ).then((response) => {
      response.json().then((data) => setProducts(data.products));
    })
  );

  function updateProductQuantity(item: ProductsCartProps, operation?: string) {
    const newProductsCart = productsOnCart.map((product) => {
      if (operation === "minus") {
        if (product.name === item.name) {
          return { ...product, quantity: product.quantity - 1 };
        }

        return product;
      }

      if (product.name === item.name) {
        return { ...product, quantity: product.quantity + 1 };
      }

      return product;
    });

    setProductsOnCart(newProductsCart);
  }

  function addItemToCart(name: string, photo: string, price: string) {
    const existingProduct = productsOnCart.find(
      (product) => product.name === name
    );

    if (existingProduct) {
      updateProductQuantity(existingProduct);
    } else {
      setProductsOnCart([
        ...productsOnCart,
        { name, photo, price, quantity: 1 },
      ]);
    }
  }

  function removeItemFromCart(itemName: string) {
    const productsOnCartWithoutDeletedOne = productsOnCart.filter(
      (product) => product.name !== itemName
    );

    setProductsOnCart(productsOnCartWithoutDeletedOne);
  }

  return (
    <Container>
      <Header
        itemsQuantity={productsOnCart.length}
        cartProducts={productsOnCart}
        onRemoveItem={removeItemFromCart}
        onUpdateQuantity={updateProductQuantity}
      />

      <main>
        <Content>
          {isLoading ? (
            <section>
              {Array(8)
                .fill(null)
                .map((_) => (
                  <SkeletonLoader />
                ))}
            </section>
          ) : (
            products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                photo={product.photo}
                price={product.price}
                onAddItem={addItemToCart}
              />
            ))
          )}
        </Content>
      </main>

      <footer>MKS sistemas © Todos os direitos reservados</footer>
    </Container>
  );
}

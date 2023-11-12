import { useState } from "react";
import { Container } from "./styles";

type ProductsCartType = {
  name: string;
  photo: string;
  price: string;
  quantity: number;
};

interface CounterProps {
  onRemoveItem: () => void;
  onUpdateQuantity: (item: ProductsCartType) => void;
  product: ProductsCartType;
  quantity: number;
}

export function Counter({
  onRemoveItem,
  quantity,
  onUpdateQuantity,
  product,
}: CounterProps) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  function handleRemoveProduct() {
    if (productQuantity === 1) {
      onRemoveItem();

      return;
    }

    setProductQuantity((state) => state - 1);
  }
  return (
    <Container>
      <button onClick={handleRemoveProduct}>-</button>
      <p>{quantity}</p>
      <button onClick={() => onUpdateQuantity(product)}>+</button>
    </Container>
  );
}

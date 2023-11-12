import { Container } from "./styles";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type ProductsCartType = {
  name: string;
  photo: string;
  price: string;
  quantity: number;
};

interface CounterProps {
  onRemoveItem: () => void;
  onUpdateQuantity: (item: ProductsCartType, operation?: string) => void;
  product: ProductsCartType;
  quantity: number;
}

export function Counter({
  onRemoveItem,
  quantity,
  onUpdateQuantity,
  product,
}: CounterProps) {
  function handleRemoveProduct() {
    if (product.quantity === 1) {
      onRemoveItem();

      return;
    }

    onUpdateQuantity(product, "minus");
  }
  return (
    <Container>
      <button onClick={handleRemoveProduct}>
        <AiOutlineMinus size={8} />
      </button>
      <p>{quantity}</p>
      <button onClick={() => onUpdateQuantity(product)}>
        <AiOutlinePlus size={8} />
      </button>
    </Container>
  );
}

import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Counter } from "../Counter";
import { useState } from "react";

type ProductsCartType = {
  name: string;
  photo: string;
  price: string;
  quantity: number;
};

interface CartCardProps {
  photo: string;
  name: string;
  price: string;
  quantity: number;
  onRemoveItem: (itemName: string) => void;
  onUpdateQuantity: (item: ProductsCartType) => void;
}

export function CartCard({
  photo,
  name,
  price,
  quantity,
  onRemoveItem,
  onUpdateQuantity,
}: CartCardProps) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  return (
    <Container>
      <img src={photo} alt="" />

      <h1>{name}</h1>

      <Counter
        quantity={quantity}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={() => onRemoveItem(name)}
        product={{ name, photo, price, quantity }}
      />

      <p>R${price}</p>

      <button onClick={() => onRemoveItem(name)}>
        <AiOutlineClose size={16} />
      </button>
    </Container>
  );
}

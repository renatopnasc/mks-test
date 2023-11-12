import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

interface CartCardProps {
  photo: string;
  name: string;
  price: string;
  onRemoveItem: (itemName: string) => void;
}

export function CartCard({ photo, name, price, onRemoveItem }: CartCardProps) {
  return (
    <Container>
      <img src={photo} alt="" />

      <h1>{name}</h1>

      <input type="range" name="" id="" />

      <p>R${price}</p>

      <button onClick={() => onRemoveItem(name)}>
        <AiOutlineClose size={16} />
      </button>
    </Container>
  );
}

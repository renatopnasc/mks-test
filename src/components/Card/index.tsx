import { Container, BuyButton } from "./styles";
import { FiShoppingBag } from "react-icons/fi";

interface ProductsProps {
  name: string;
  description: string;
  photo: string;
  price: string;
  onAddItem: (name: string, photo: string, price: string) => void;
}

export function Card({
  name,
  description,
  photo,
  price,
  onAddItem,
}: ProductsProps) {
  return (
    <Container>
      <img src={photo} alt="" />

      <section>
        <div className="productInfo">
          <h1>{name}</h1>
          <p>R${price}</p>
        </div>

        <div className="productDescription">
          <p>{description}</p>
        </div>
      </section>

      <footer>
        <BuyButton onClick={() => onAddItem(name, photo, price)}>
          <FiShoppingBag /> comprar
        </BuyButton>
      </footer>
    </Container>
  );
}

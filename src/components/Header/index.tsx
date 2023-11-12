import { useEffect, useState } from "react";
import { Container, CartButton, Cart, FinalizeOrderButton } from "./styles";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CartCard } from "../CartCard";

type ProductsCartType = {
  name: string;
  photo: string;
  price: string;
  quantity: number;
};

interface HeaderProps {
  itemsQuantity: number;
  cartProducts: ProductsCartType[];
  onRemoveItem: (itemName: string) => void;
  onUpdateQuantity: (item: ProductsCartType) => void;
}

export function Header({
  itemsQuantity,
  cartProducts,
  onRemoveItem,
  onUpdateQuantity,
}: HeaderProps) {
  const [openCart, setOpenCart] = useState(false);
  const [amount, setAmount] = useState(0);

  function handleDisableCart() {
    setOpenCart((state) => !state);
  }

  useEffect(() => {
    function updateAmout() {
      if (cartProducts.length === 0) {
        setAmount(0);
      }

      setAmount(0);
      cartProducts.map((product) =>
        setAmount((state) => state + Number(product.price) * product.quantity)
      );
    }

    updateAmout();
  }, [cartProducts]);

  return (
    <Container>
      <h1>
        MKS <span>Sistemas</span>
      </h1>

      <CartButton onClick={handleDisableCart}>
        <HiMiniShoppingCart size={18} />
        <span>{itemsQuantity}</span>
      </CartButton>

      {openCart && (
        <Cart>
          <main>
            <header>
              <h2>Carrinho de compras</h2>

              <button onClick={handleDisableCart}>
                <AiOutlineCloseCircle size={20} />
              </button>
            </header>

            <div>
              {cartProducts.map((product) => (
                <CartCard
                  photo={product.photo}
                  name={product.name}
                  price={product.price}
                  onRemoveItem={onRemoveItem}
                  quantity={product.quantity}
                  onUpdateQuantity={onUpdateQuantity}
                  key={product.name}
                />
              ))}
            </div>

            <footer>
              <p>Total:</p>

              <p>R${amount}</p>
            </footer>
          </main>

          <footer>
            <FinalizeOrderButton>Finalizar Compra</FinalizeOrderButton>
          </footer>
        </Cart>
      )}
    </Container>
  );
}

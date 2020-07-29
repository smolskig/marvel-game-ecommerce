import React, { useEffect } from "react";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartMenu, getUi } from "../../slices/ui/uiSlice";
import {
  getCart,
  incrementItem,
  decrementItem,
  removeCart,
} from "../../slices/cart/cartSlice";

import "./Cart.css";

function Cart() {
  const ui = useSelector(getUi);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let result = 0;
    cart.items.map((item) => {
      return (result += item.price);
    });

    return result;
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementItem({ id: item.id }));
    } else {
      dispatch(removeCart({ id: item.id }));
    }
  };

  const displayCartMenu = () => {
    if (cart.items.length > 0) {
      return cart.items.map((item) => {
        return (
          <div key={item.id} className="item-list" id="cartRel">
            <span className="item-name" id="cartRel">
              {item.title}
            </span>
            <span className="item-price" id="cartRel">
              {item.price}
            </span>
            <span className="item-quantity" id="cartRel">
              {item.quantity}X
            </span>
            <div className="quantity-control" id="cartRel">
              <span
                onClick={() => handleDecrement(item)}
                id="cartRel"
                className="quantity nohighlight noselect"
              >
                <FiMinus className="svg-ico"></FiMinus>
              </span>
              <span
                onClick={() => dispatch(incrementItem({ id: item.id }))}
                className="quantity nohighlight noselect"
                id="cartRel"
              >
                <FiPlus className="svg-ico "></FiPlus>
              </span>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="emptyCart">
          Você não possui nenhum item no carrinho :(
        </div>
      );
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // adicionando um listener no corpo da pagina pra fechar o menu
      if (e.target.id !== "cartRel") {
        return dispatch(toggleCartMenu({ cartOpen: false }));
      }
    });
  }, [dispatch]);

  return (
    <>
      <span
        className="cart icon nohighlight noselect "
        id="cartRel"
        onClick={() => dispatch(toggleCartMenu({ cartOpen: !ui.cartMenuOpen }))}
      >
        <FiShoppingCart className="svg-ico"></FiShoppingCart>
        <span className="length-indicator">{cart.items.length}</span>
      </span>
      {ui.cartMenuOpen ? (
        <div className="cartMenu" id="cartRel">
          <div className="cart-list" id="cartRel">
            {displayCartMenu()}
          </div>
          {cart.items.length > 0 ? (
            <div className="info-buy" id="cartRel">
              <div className="total-row" id="cartRel">
                <span className="title" id="cartRel">
                  Total: R$ {totalPrice()}
                </span>
              </div>
              <div className="button-row" id="cartRel">
                <span id="cartRel" className="description">
                  Ao clicar no botão de finalizar compra, você será
                  redirecionado para a tela de pagamento
                </span>
                <button className="marvel-btn btn" id="cartRel">
                  Finalizar Compra
                </button>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Cart;

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import "./GameModal.css";
import { FiX } from "react-icons/fi";
import { getUi,toggleModal } from "../../slices/ui/uiSlice";
import { getGames } from "../../slices/games/gamesSlice";
import { addCart, getCart } from "../../slices/cart/cartSlice";

const GameModal = () => {
  const ui = useSelector(getUi) // hook para pegar o state ui
  const games = useSelector(getGames)
  const cart = useSelector(getCart)
  const dispatch = useDispatch();
  
  const addItemToCart = (data) =>{
      const dataToSend = {
        title:data.headline,
        price:149.99,
        fixedPrice:149.99,
        quantity:1,
        id:cart.items.length + 1
    }
    dispatch(addCart(dataToSend))
  }
  const displayButton = () => {
    let result = []
    if(cart.items.length > 0){
      result = cart.items.map(item=>{
        return item.title
      })
      if(result.includes(games.selected.headline)){
        return <button className="marvel-btn" disabled onClick={()=> addItemToCart(games.selected)} >Você adicionou esse jogo ao carrinho</button>
      }else{
        return <button className="marvel-btn" onClick={()=> addItemToCart(games.selected)} >Adicionar ao Carrinho</button> 
      }
    }else{
      return <button className="marvel-btn" onClick={()=> addItemToCart(games.selected)} >Adicionar ao Carrinho</button>
    }
    
  }

  const displayModal = () => {
    if (ui.modalOpen === true) {
      return (
        <>
        <div className="modal-wrapper" >
          <div className="modal-content">
            <FiX
              className="close-icon"
              onClick={() => dispatch(toggleModal({ modalOpen: false }))}
            ></FiX>
            <div className="image-area">
              <img className="cover-image" src={`https://terrigen-cdn-dev.marvel.com/content/prod/1x/${games.selected.image.filename}`} alt="game-cover" />
            </div>
            <div className="info-area">
              <div className="vertical-row">
                <span className="label">Título</span>
                <span className="title">{games.selected.headline}</span>
              </div>
              <div className="vertical-row">
                <span className="label">Overview</span>
                <span className="text">
                  {games.selected.data.synopsis}
                </span>
              </div>
              <div className="row">
                <div className="vertical-row">
                  <span className="label">Preço</span>
                  <span className="price">R$149,99</span>
                </div>
                {
                  displayButton()
                }
              </div>
            </div>
          </div>
        </div>
        <div className="modal-dark" onClick={(e) => {
              dispatch(toggleModal({ modalOpen: false }))
            }
          }>
        </div>
        </>
      );
    } else {
      return false;
    }
  };

  return displayModal();
  
};

export default GameModal;

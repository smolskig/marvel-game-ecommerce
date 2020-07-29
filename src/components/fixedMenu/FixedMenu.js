import React, {useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './FixedMenu.css'

import { Link,useLocation } from 'react-router-dom'
import { requestGames } from '../../slices/games/gamesSlice';
import { useDispatch } from 'react-redux';

import Cart from '../cart/Cart'

const FixedMenu = () => {
    const dispatch = useDispatch()

    useEffect(()=>{ // chama a action que faz a requisição de todos os jogos
        dispatch(requestGames)
    },[dispatch])
    
    return <div className="cart-area">
                {
                    useLocation().pathname === '/games' ?
                        <Link className="back icon" to="/"><FiArrowLeft></FiArrowLeft></Link>
                    : false
                }
                <Cart></Cart>
            </div>
}

export default FixedMenu;
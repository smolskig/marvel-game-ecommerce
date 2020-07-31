import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'

import { Provider } from 'react-redux'
import store from '../../store/store'

import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import GameList from './GameList'
import FixedMenu from '../fixedMenu/FixedMenu'


test('Deve retornar a lista de jogos',async ()=>{
    jest.setTimeout(10000); // aumenta o timer do jest por conta da requisição

    const history = createMemoryHistory() // cria um history para as rotas

    const { getAllByTestId } = render(   // renderiza todos os componentes necessários

        <Provider store={store}>
            <Router history={history}>
                <GameList/>
                <FixedMenu/>
            </Router>
        </Provider>
    )

    const items = await waitForElement(()=> getAllByTestId('game-list-item'))
    console.log('ok',items[0].innerHTML)
})
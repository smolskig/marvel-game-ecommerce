import React from 'react'
import { render, waitForElement, wait } from '@testing-library/react'

import { Provider } from 'react-redux'
import store from '../../store/store'

import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import GameList from './GameList'
import FixedMenu from '../fixedMenu/FixedMenu'


test('teste',async ()=>{
    const history = createMemoryHistory()
    history.push('/games')

    const { container, getAllByTestId } = render(

        <Provider store={store}>
            <Router history={history}>
                <FixedMenu/>
                <GameList/>
            </Router>
        </Provider>
    )


    const itemList = await waitForElement(()=>{ getAllByTestId('game-list-item')})

    console.log(itemList)
})
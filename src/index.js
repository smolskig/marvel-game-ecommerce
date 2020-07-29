import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import GamesPage from './pages/gamesPage/GamesPage'
import FixedMenu from './components/fixedMenu/FixedMenu'
import GameModal from './components/gameModal/GameModal'
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GameModal></GameModal>
      <BrowserRouter>
        <FixedMenu/>
        <Switch>
          <Route path="/" name="home" exact={true} component={HomePage}></Route>
          <Route path="/games"  exact={true} component={GamesPage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


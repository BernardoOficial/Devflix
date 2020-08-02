import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
// Importação da biblioteca para fazer um SPA - Single Page Aplication
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria'

function erro() {
  return (
    <div>
      Página 404
    </div>
  )
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={erro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

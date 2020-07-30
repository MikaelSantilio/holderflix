import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria';



const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Switch>
      <Route path="/cadastro/video" component={Video} exact />
      <Route path="/cadastro/categoria" component={Categoria} exact />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </Router>,

  document.getElementById('root')
);

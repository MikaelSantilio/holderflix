import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/" >
                <img className="logo" src={logo} alt="Holderflix" ></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/" >
                <img className="logo" src={logo} alt="Holderflix" ></img>
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
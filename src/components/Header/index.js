import React, {Component} from 'react'
import user from '../../img/user.png'
import settings from '../../img/settings.png'
import './header.css'


class Header extends Component {
    render() {
        return (
            <nav className="header-space"> 
                <div class="logo">
                    <a className="logo__data">Data</a><a className="logo__report">Report</a>
                </div>
                <lu className="links text">
                    <li className="link">Home</li>
                    <li className="link">Relatórios</li>
                    <li className="link">Tarefas</li>
                    <li><input type="search" className="search" placeholder="Pesquisar..."></input></li>
                    <li><img src={user} alt="usuário" className="icon"/></li>
                    <li><img src={settings} alt="configurações" className="icon"/></li>
                </lu> 
            </nav>
        );
    }
}

export default Header;
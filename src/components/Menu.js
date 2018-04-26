import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import './Menu.css';
import Translate from 'react-translate-component';
import counterpart from 'counterpart' ;

class Menu extends Component {



    render() {
        const VIZ = <Translate type='text' content='navbar.viz' />//General
        const ABOUT = <Translate type='text' content='navbar.about' />//Mun Map
        const CONTACT = <Translate type='text' content='navbar.contact' />//Mun Map

        return (
            <div>
                <div className="menu-icon">
                    <span className="menu-icon__line menu-icon__line-left"></span>
                    <span className="menu-icon__line"></span>
                    <span className="menu-icon__line menu-icon__line-right"></span>
                </div>

                <div className="nav">
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item"><Link className={this.props.activeViz} to="/viz" >{VIZ}</Link></li>
                            <li className="nav__list-item"><Link className={this.props.activeAbout} to="/about" >{ABOUT}</Link></li>
                            <li className="nav__list-item"><Link className={this.props.activeContact} to="/contact" >{CONTACT}</Link></li>
                        </ul>
                    </div>
                </div>

                

            </div>
        );
    }
}

export default Menu;
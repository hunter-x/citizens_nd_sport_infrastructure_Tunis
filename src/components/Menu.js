import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import './Menu.css';
class Menu extends Component {



    render() {
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
                            <li className="nav__list-item"><Link className={this.props.activeViz} to="/viz" >Viz</Link></li>
                            <li className="nav__list-item"><Link className={this.props.activeAbout} to="/viz" >About</Link></li>
                            <li className="nav__list-item"><Link className={this.props.activeContact} to="/viz" >Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="site-content">
                    <h1 className="site-content__headline">Another menu concept</h1>
                </div>

            </div>
        );
    }
}

export default Menu;
import React, { Component } from 'react';
import Menu from './Menu';
export default class Home extends Component {
  render() {
    return (
      <div className='nav-active'>
        <Menu activeViz='activeLink'
              activeAbout=''
              activeContact='' />
              <div className="site-content">
                    <h1 className="site-content__headline">Another menu concept</h1>
                </div>
        React simple starter Home</div>
    );
  }
}

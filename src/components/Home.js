import React, { Component } from 'react';
import Menu from './Menu';
export default class Home extends Component {
  render() {
    return (
      <div className='nav-active'>
        <Menu activeViz='activeLink'
              activeAbout=''
              activeContact='' />
        React simple starter Home</div>
    );
  }
}

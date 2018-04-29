import React, { Component } from 'react';
import Menu from './Menu';
import UnderConstruction from './UnderConstruction' ;
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { menuStyle: true }
  }

  openMenu() {
    let menuStyle = !this.state.menuStyle
    this.setState({ menuStyle });
  }
  render() {
    let menuStyle = ''; this.state.menuStyle ? menuStyle = '' : menuStyle = 'nav-active'
    return (
      <section className={menuStyle} >
        <Menu activeViz=''
          activeAbout='activeLink'
          activeContact=''
          openMenu={this.openMenu.bind(this)}
        />
        <UnderConstruction/>
        <h4 className='col-md-offset-5 '>Under Construction</h4><br/>

      </section>
    );
  }
}

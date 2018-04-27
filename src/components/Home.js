import React, { Component } from 'react';
import Menu from './Menu';
import ShuffleBoxes from './ShuffleBoxes' ;
export default class Home extends Component {
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
        <Menu activeViz='activeLink'
          activeAbout=''
          activeContact=''
          openMenu={this.openMenu.bind(this)}
        />
        <div className="site-content">
          <h1 className="site-content__headline">Distribution of citizens & Sport infrastructure<br/> in Tunis Municipality</h1>
        </div>
        <ShuffleBoxes/>
      </section>
    );
  }
}

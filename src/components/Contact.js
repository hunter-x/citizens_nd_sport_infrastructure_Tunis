import React, { Component } from 'react';
import Menu from './Menu';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={menuStyle:true}
  }
  
  openMenu(){
    let menuStyle = !this.state.menuStyle
    this.setState({menuStyle});
  }
  render() {
    let menuStyle='';this.state.menuStyle?menuStyle='':menuStyle='nav-active'
    return (
      <section className={menuStyle} >
        <Menu activeViz=''
              activeAbout=''
              activeContact='activeLink' 
              openMenu={this.openMenu.bind(this)}
              />
              <div className="site-content">
                    <h1 className="site-content__headline">Another menu concept</h1>
                </div>
        React simple starter Contact</section>
    );
  }
}

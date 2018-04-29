import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Menu from './Menu';
import ShuffleBoxes from './SportInTunisMun/ShuffleBoxes' ;
import MapTunisArrond from './SportInTunisMun/MapTunisArrond' ;
import Article from './SportInTunisMun/Article' ;
import ZigzagMenu from './ZigzagMenu' ;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { menuStyle: true,chosenViz:'boxes' }
  }
  openMenu() {
    let menuStyle = !this.state.menuStyle
    this.setState({ menuStyle });
  }
  getVizType(e){
    console.log('dddd',e);
    this.setState({chosenViz:e})
  }
  
  render() {
    let menuStyle = ''; this.state.menuStyle ? menuStyle = '' : menuStyle = 'nav-active'
    let { chosenViz } = this.state;
    const TITLE = <Translate type='text' content='title.title' />//Distribution of citizens & Sport infrastructure
    const TITLE2 = <Translate type='text' content='title.title2' />//in Tunis Municipality

    return (
      <section className={menuStyle} >
        <Menu activeViz='activeLink'
          activeAbout=''
          activeContact=''
          openMenu={this.openMenu.bind(this)}
        />
        <div className="site-content">
          <h1 className="site-content__headline">{TITLE}<br/> {TITLE2}</h1>
        </div>
        <ZigzagMenu getVizType={this.getVizType.bind(this)}/>
        {this.state.chosenViz=='boxes'?<ShuffleBoxes/>:(this.state.chosenViz=='map'?<MapTunisArrond/>:<Article/>)}
      </section>
    );
  }
}

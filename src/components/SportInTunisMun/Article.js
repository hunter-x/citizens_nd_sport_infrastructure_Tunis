import React, { Component } from 'react';
import './Article.css'
import Translate from 'react-translate-component';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }


  render() {
    // console.log(dataSport);
    const CITIZEN = <Translate type='text' content='box.citizen' />//Citizens

    return (
      <div className='container'>
        Article
      </div>
    );
  }
}


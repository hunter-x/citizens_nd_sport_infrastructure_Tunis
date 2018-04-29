import React, { Component } from 'react';
import './Article.css'
import Translate from 'react-translate-component';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    // console.log(dataSport);
    const CITIZEN = <Translate type='text' content='box.citizen' />//Citizens

    return (
      <div className='container col-md-offset-2'>
        <h4>Article and data collected by Barlamen <a href='http://news.barralaman.tn/tunmun-sport/' target="_blank">Article Link</a></h4>

        <a href="http://news.barralaman.tn/tunmun-sport/">
          <img src="https://i2.wp.com/news.barralaman.tn/wp-content/uploads/2018/04/tunmun_inf.jpg?resize=930%2C450 " alt="Article barlamen" style={{marginTop:'20px'}} />
        </a>
      </div>
    );
  }
}


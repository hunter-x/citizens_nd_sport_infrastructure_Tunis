import React, { Component } from 'react';
import './box.css'
export default class Box extends Component {
  render() {
    let info;
    switch (this.props.filter) {
      case 'citizen':
        info =
          <div className='card-block'>
            <h6 className="m-b-20">Orders Received</h6>
            <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>486</span></h2>
            <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
          </div>
        break;
      case 'complex':
        info =
          <div className='card-block'>
            <h6 className="m-b-20">Orders Received</h6>
            <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>000</span></h2>
            <p className="m-b-0">Completed Orders<span className="f-right">000</span></p>
          </div>
        break;
      default:
        break;
    }
    return (
      <div className="row">

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            {info}
          </div>
        </div>

      </div>
    );
  }
}


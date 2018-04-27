import React, { Component } from 'react';
import './ShuffleBoxes.css'
import Box from './Box';
export default class ShuffleBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'citizen',checked:[true,false,false,false,false] }
  }

  handleRadioFilter(filter,e) {
    let checked=[false,false,false,false,false]
    checked[parseInt(e.target.value)]=true
    this.setState({ filter, checked });
  }

  render() {
    return (
      <div className='container'>
        {<section>
            <div className="md-radio md-radio-inline">
              <input id="3" type="radio" name="g2"  value={0} onChange={this.handleRadioFilter.bind(this, 'citizen')} checked={this.state.checked[0]} />
              <label htmlFor="3">Citizens</label>
            </div>
            <div className="md-radio md-radio-inline">
              <input id="4" type="radio" name="g2" value={1} onChange={this.handleRadioFilter.bind(this, 'complex')} checked={this.state.checked[1]}  />
              <label htmlFor="4">Sports complex</label>
            </div>
            <div className="md-radio md-radio-inline">
              <input id="5" type="radio" name="g2" value={2} onChange={this.handleRadioFilter.bind(this, 'field')} checked={this.state.checked[2]} />
              <label htmlFor="5">Sports fields</label>
            </div>
            <div className="md-radio md-radio-inline">
              <input id="6" type="radio" value={3} onChange={this.handleRadioFilter.bind(this, 'hall')} name="g2" checked={this.state.checked[3]} />
              <label htmlFor="6">sports Hall</label>
            </div>
            <div className="md-radio md-radio-inline">
              <input id="7" type="radio" value={4} onChange={this.handleRadioFilter.bind(this, 'athletic')} name="g2" checked={this.state.checked[4]} />
              <label htmlFor="7">Athletics Track</label>
            </div>
        </section>}

        <Box filter={this.state.filter} />

      </div>
    );
  }
}


import React, { Component } from 'react';
import './ShuffleBoxes.css'
import Box from './Box';
import dataSport from '../../data/datasport';
import Translate from 'react-translate-component';

export default class ShuffleBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'citizen', checked: [true, false, false, false, false] }
  }

  handleRadioFilter(filter, e) {
    let checked = [false, false, false, false, false]
    checked[parseInt(e.target.value)] = true
    this.setState({ filter, checked });
  }

  render() {
    console.log(dataSport);
    const CITIZEN = <Translate type='text' content='box.citizen' />//Citizens
    const COMPLEX = <Translate type='text' content='box.complex' />//Sports complex
    const FIELD = <Translate type='text' content='box.field' />//Sports fields
    const SALLE = <Translate type='text' content='box.salle' />//sports Hall
    const ATHLETISM = <Translate type='text' content='box.athletism' />//Athletics Track

    return (
      <div className='container'>
        <section>
          <div className="md-radio md-radio-inline">
            <input id="3" type="radio" name="g2" value={0} onChange={this.handleRadioFilter.bind(this, 'citizen')} checked={this.state.checked[0]} />
            <label htmlFor="3">{CITIZEN}</label>
          </div>
          <div className="md-radio md-radio-inline">
            <input id="4" type="radio" name="g2" value={1} onChange={this.handleRadioFilter.bind(this, 'complex')} checked={this.state.checked[1]} />
            <label htmlFor="4">{COMPLEX}</label>
          </div>
          <div className="md-radio md-radio-inline">
            <input id="5" type="radio" name="g2" value={2} onChange={this.handleRadioFilter.bind(this, 'field')} checked={this.state.checked[2]} />
            <label htmlFor="5">{FIELD}</label>
          </div>
          <div className="md-radio md-radio-inline">
            <input id="6" type="radio" value={3} onChange={this.handleRadioFilter.bind(this, 'hall')} name="g2" checked={this.state.checked[3]} />
            <label htmlFor="6">{SALLE}</label>
          </div>
          <div className="md-radio md-radio-inline">
            <input id="7" type="radio" value={4} onChange={this.handleRadioFilter.bind(this, 'athletic')} name="g2" checked={this.state.checked[4]} />
            <label htmlFor="7">{ATHLETISM}</label>
          </div>
        </section>
        <div className="container">
          <div className="row col-md-12">
            {dataSport.map((object, i) => {
             
               return <Box filter={this.state.filter} citizen={object.population_number} complex={object.complex} field={object.field} hall={object.salle} athletic={object.atheletic} color={i} name={object.nom_arrond_fr} key={i} />
              
            })
            }
          </div>
        </div>

      </div>
    );
  }
}


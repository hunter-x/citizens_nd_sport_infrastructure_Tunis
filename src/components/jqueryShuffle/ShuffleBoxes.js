import React, { Component } from 'react';
import Shuffle from 'shufflejs';
import './ShuffleBoxes.css'
export default class ShuffleBoxes extends Component {
  constructor(props) {
    super(props);

    // Initialize with some "photos" that are cached (or none at all). Maybe you
    // have a service worker that cached the last API response and you can
    // use that here while waiting on a network request.

    this.state = {
    };
  }

  /**
   * Fake and API request for a set of images.
   * @return {Promise<Object[]>} A promise which resolves with an array of objects.
   */
  _fetchPhotos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 4, username: '@stickermule', name: 'Sticker Mule', src: 'https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=14d236624576109b51e85bd5d7ebfbfc' },
          { id: 5, username: '@prostoroman', name: 'Roman Logov', src: 'https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=7a7080fc0699869b1921cb1e7047c5b3' },
          { id: 6, username: '@richienolan', name: 'Richard Nolan', src: 'https://images.unsplash.com/photo-1478033394151-c931d5a4bdd6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=3c74d594a86e26c5a319f4e17b36146e' },
          { id: 7, username: '@wexor', name: 'Wexor Tmg', src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=11ff283143c782980861a442a957da8e' },
          { id: 8, username: '@dnevozhai', name: 'Denys Nevozhai', src: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=ea06c0f0700ec469fdcb32e0d4c2928e' },
          { id: 9, username: '@aronvandepol', name: 'Aron Van de Pol', src: 'https://images.unsplash.com/photo-1469719847081-4757697d117a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=9a568bc48e42d3bb60c97c0eb3dc20ac' },
        ]);
      }, 300);
    });
  }

  /**
   * Resolve a promise when all the photos in an array have loaded.
   * @param {Object[]} photos Photos to load.
   * @return {Promise.<Object[]>} Loaded images.
   */
  _whenPhotosLoaded(photos) {
    return Promise.all(photos.map(photo => new Promise((resolve) => {
      const image = document.createElement('img');
      image.src = photo.src;

      if (image.naturalWidth > 0 || image.complete) {
        resolve(photo);
      } else {
        image.onload = () => {
          resolve(photo);
        };
      }
    })));
  }

  componentDidMount() {
    console.log(Demo.prototype);
    new Demo(document.querySelector('.js-shuffle'));
  }

  componentDidUpdate() {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    this.shuffle.resetItems();
    
  }

  componentWillUnmount() {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy();
    this.shuffle = null;
  }
  render() {
    let menuStyle = ''; this.state.menuStyle ? menuStyle = '' : menuStyle = 'nav-active'
    return (
      <section className="container">

        <div className="filter-options filter-options--compound row">

          <div className="col-6@sm">
            <div className="filter-group filter-group--compound js-colors">
              <h5 className="filter-group__label filter-group__label--compound">Colors</h5>
              <button className="btn btn--go" data-value="green"><span className="visuallyhidden">Green</span></button>
              <button className="btn btn--primary" data-value="blue"><span className="visuallyhidden">Blue</span></button>
              <button className="btn btn--danger" data-value="red"><span className="visuallyhidden">Red</span></button>
              <button className="btn btn--warning" data-value="orange"><span className="visuallyhidden">Orange</span></button>
            </div>
          </div>

          <div className="col-6@sm">
            <div className="filter-group filter-group--compound js-shapes">
              <h5 className="filter-group__label filter-group__label--compound">Shapes</h5>
              <span className="ib">
                <input type="checkbox" value="circle" id="cb-circle" /> <label htmlFor="cb-circle">Circle</label>
              </span>
              <span className="ib">
                <input type="checkbox" value="diamond" id="cb-diamond" /> <label htmlFor="cb-diamond">Diamond</label>
              </span>
              <span className="ib">
                <input type="checkbox" value="square" id="cb-square" /> <label htmlFor="cb-square">Square</label>
              </span>
              <span className="ib">
                <input type="checkbox" value="triangle" id="cb-triangle" /> <label htmlFor="cb-triangle">Triangle</label>
              </span>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="shape-shuffle-container js-shuffle">


            <div className="col-3@xs col-3@sm shape shape--square shape--red" data-shape="square" data-color="red">
              <div className="aspect">
                <div className="aspect__inner">
                  <div className="shape__space"></div>
                </div>
              </div>
            </div>


            <div className="col-3@xs col-3@sm shape shape--square shape--green" data-shape="square" data-color="green">
              <div className="aspect">
                <div className="aspect__inner">
                  <div className="shape__space"></div>
                </div>
              </div>
            </div>

            <div className="col-3@xs col-3@sm shape shape--square shape--orange" data-shape="square" data-color="orange">
              <div className="aspect">
                <div className="aspect__inner">
                  <div className="shape__space"></div>
                </div>
              </div>
            </div>

            <div className="col-3@xs col-3@sm shape shape--square shape--blue" data-shape="square" data-color="blue">
              <div className="aspect">
                <div className="aspect__inner">
                  <div className="shape__space"></div>
                </div>
              </div>
            </div>

            <div className="the-sizer col-1@xs col-1@sm"></div>
          </div>
        </div>

      </section>
    );
  }

}
var Demo = function (element) {
  this.shapes = Array.from(document.querySelectorAll('.js-shapes input'));
  this.colors = Array.from(document.querySelectorAll('.js-colors button'));

  this.shuffle = new Shuffle(element, {
    easing: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)', // easeOutQuart
    sizer: '.the-sizer',
  });

  this.filters = {
    shapes: [],
    colors: [],
  };

  this._bindEventListeners();
};
Demo.prototype._getCurrentShapeFilters = function () {
  return this.shapes.filter(function (input) {
    return input.checked;
  }).map(function (input) {
    return input.value;
  });
};
Demo.prototype._getCurrentColorFilters = function () {
  return this.colors.filter(function (button) {
    return button.classList.contains('active');
  }).map(function (button) {
    return button.getAttribute('data-value');
  });
};
Demo.prototype._handleShapeChange = function () {
  this.filters.shapes = this._getCurrentShapeFilters();
  this.filter();
};
Demo.prototype._handleColorChange = function (evt) {
  var button = evt.currentTarget;

  // Treat these buttons like radio buttons where only 1 can be selected.
  if (button.classList.contains('active')) {
    button.classList.remove('active');
  } else {
    this.colors.forEach(function (btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  }

  this.filters.colors = this._getCurrentColorFilters();
  this.filter();
};
Demo.prototype.filter = function () {
  if (this.hasActiveFilters()) {
    this.shuffle.filter(this.itemPassesFilters.bind(this));
  } else {
    this.shuffle.filter(Shuffle.ALL_ITEMS);
  }
};
Demo.prototype.hasActiveFilters = function () {
  return Object.keys(this.filters).some(function (key) {
    return this.filters[key].length > 0;
  }, this);
};
Demo.prototype.itemPassesFilters = function (element) {
  var shapes = this.filters.shapes;
  var colors = this.filters.colors;
  var shape = element.getAttribute('data-shape');
  var color = element.getAttribute('data-color');

  // If there are active shape filters and this shape is not in that array.
  if (shapes.length > 0 && !shapes.includes(shape)) {
    return false;
  }

  // If there are active color filters and this color is not in that array.
  if (colors.length > 0 && !colors.includes(color)) {
    return false;
  }

  return true;
};
Demo.prototype._bindEventListeners = function () {
  this._onShapeChange = this._handleShapeChange.bind(this);
  this._onColorChange = this._handleColorChange.bind(this);

  this.shapes.forEach(function (input) {
    input.addEventListener('change', this._onShapeChange);
  }, this);

  this.colors.forEach(function (button) {
    button.addEventListener('click', this._onColorChange);
  }, this);
};
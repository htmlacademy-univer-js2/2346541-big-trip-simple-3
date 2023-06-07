
import {createElement} from '../src/render.js';
const tripEvent = () => (
  `<div class="event">
              <time class="event__date" datetime="2019-03-18">MAR 18</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
              </div>
              <h3 class="event__title">Flight Chamonix</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>
                  &mdash;
                  <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>
                </p>
              </div>
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">160</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
                <li class="event__offer">
                  <span class="event__offer-title">Add luggage</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">50</span>
                </li>
                <li class="event__offer">
                  <span class="event__offer-title">Switch to comfort</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">80</span>
                </li>
              </ul>
              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
            </div>
          </li>`
);
export default class Events {
  getTemplate () {
    return tripEvent;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

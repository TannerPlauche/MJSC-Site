import React, { Component } from 'react';
import '../css/sponsorship.css';
import sponsorshipInfo from '../assets/graphics/mjscScholarships.png';

export default class Sponsorship extends Component {
  render() {
    return (
      <div className="section is-marginless sponsorship">
        <h1>Become a sponsor!</h1>
        <img src={sponsorshipInfo}
          alt=""
          className="sponsorshipInfo" />

      </div >
    );
  }
}

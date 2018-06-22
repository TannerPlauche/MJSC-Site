<<<<<<< HEAD
import React,
{
  Component
}

  from 'react';
=======
import React, { Component } from 'react';
>>>>>>> 1d2ef57169659755f3cf354780dcf0f595a060e6
import '../css/sponsorship.css';
import sponsorshipInfo from '../assets/graphics/mjscScholarships.png';

export default class Sponsorship extends Component {
  render() {
    return (
      <div className="section is-marginless sponsorship">
        <h1>Become a sponsor!</h1>
<<<<<<< HEAD
        <img src={sponsorshipInfo} alt="" className="sponsorshipInfo" />
      </div >);
=======
        <img src={sponsorshipInfo}
          alt=""
          className="sponsorshipInfo" />

      </div >
    );
>>>>>>> 1d2ef57169659755f3cf354780dcf0f595a060e6
  }
}
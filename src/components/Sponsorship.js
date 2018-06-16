import React, { Component } from 'react';
import '../css/sponsorship.css';

import sponsorshipInfo from '../assets/graphics/mjscScholarships.png';
export default class Sponsorship extends Component {
  render() {
    return (
      <div className="section is-marginless sponsorshipContainer">
        <h1>Become a sponsor!</h1>
        <img src={sponsorshipInfo} alt="" className="sponsorshipInfo" />
        <div className="flex justifyCenter alignCenter column">
          {/* <iframe className="embeddedDoc" src="/public/mjscImages/sponsorshipPackages.pdf" width="80%" height="600"></iframe> */}
        </div>
      </div>
    );
  }
}

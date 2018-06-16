import React, { Component } from 'react';
import '../css/sponsorship.css';

import sponsorshipInfo from '../assets/graphics/mjscScholarships.png';
export default class Sponsorship extends Component {
  render() {
    return (
      <div className="section is-marginless sponsorshipContainer">
        <img src={sponsorshipInfo} alt="" className="sponsorshipInfo" />
          <div className="flex justifyCenter alignCenter column">
              <h1>Become a sponsor!</h1>
              <iframe className="embeddedDoc"  src="https://drive.google.com/file/d/1udFP9WrMhAL1IQjuFk8YXgArBwPMCApT/preview" width="80%" height="600"></iframe>
          </div>
      </div>
    );
  }
}

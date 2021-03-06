import React, { Component } from 'react';
import scheduleGraphic from '../assets/graphics/scheduleLabel.jpg';
import '../css/trainingschedule.css';

export default class TrainingSchedule extends Component {
  maplocation = 'https://goo.gl/maps/74LSa1yht7p';

  render() {
    return (
      <div className="backgroundAttach">
        <div>
          {/* <section className="scheduleContainer">
            <img className="scheduleImage" src={scheduleGraphic} alt="" />
          </section> */}
          <section className="box is-radiusless schedule-header">
            <div className="content has-text-centered">
              <h1 className="">Summer Training Schedule</h1>
              <p className=" secondaryFont">
                Group training sessions are held on saturday mornings, at the Charlie Daniels Park
                in Mount Juliet. We welcome players from ages 3-18, who will be arranged by age
                group. Training takes place in forty-minute time slots from 9 AM until 12:40 PM, as
                seen in the below table.
              </p>
              <p className=" secondaryFont">
                Individual training sessions take place from 12:40PM onwards, on a scheduled basis.
              </p>
            </div>
            <div className="content has-text-centered">
              <h3 className="">Registration and Rates</h3>
              <p className=" secondaryFont">
                Registration is a one-time fee of $35, and includes a free MJSC shirt. Please call{' '}
                <a href="tel:1-613-603-0785">(615) 603-0785</a> or email{' '}
                <a
                  href="mailto:mountjulietsoccerclub@gmail.com?Subject=MJSC%20Registration%20and%20Information"
                  target="_top">
                  mountjulietsoccerclub@gmail.com
                </a>{' '}
                for registration and more information.
              </p>
              <p className="is-size-5 is-size-6-mobile secondaryFont">
                Group sessions: $100 / five 40 minute sessions
              </p>
              <p className="is-size-5 is-size-6-mobile secondaryFont">
                Individual sessions: $200 / five 60 minute sessions
              </p>
              <p className="is-size-5 is-size-6-mobile secondaryFont">
                All lessons must be paid for in advance.
              </p>
            </div>
          </section>

          <section className="content">
            <div className="registration">
              <h1 className=" has-text-centered is-size-3 is-size-3-mobile">
                Group Training Schedule
              </h1>
              <a
                className="button is-large"
                href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Group%20Coaching%20Registration"
                target="_top"
              >
                Register for group coaching
              </a>
            </div>
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead className="has-background-grey-lighter">
                <tr>
                  <th>Age</th>
                  <th>Location</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="has-text-centered">
                <tr>
                  <th>4-7 years</th>
                  <td>
                    <a href={this.maplocation} target="blank">
                      Charlie Daniels Park, Mt. Juliet
                    </a>
                  </td>
                  <td>Saturdays, 8:00am - 8:40am</td>
                  <td>$100 / five sessions</td>
                </tr>
                <tr>
                  <th>8-11 years</th>
                  <td>
                    <a href={this.maplocation} target="blank">
                      Charlie Daniels Park, Mt. Juliet
                    </a>
                  </td>
                  <td>Saturdays, 8:45am - 9:25am</td>
                  <td>$100 / five sessions</td>
                </tr>
                <tr>
                  <th>12-15 years</th>
                  <td>
                    <a href={this.maplocation} target="blank">
                      Charlie Daniels Park, Mt. Juliet
                    </a>
                  </td>
                  <td>Saturdays, 9:30am - 10:10am</td>
                  <td>$100 / five sessions</td>
                </tr>
                <tr>
                  <th>16-18 years</th>
                  <td>
                    <a href={this.maplocation} target="blank">
                      Charlie Daniels Park, Mt. Juliet
                    </a>
                  </td>
                  <td>Saturdays, 10:15am - 10:55am</td>
                  <td>$100 / five sessions</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="content">
            <div className="registration">
              <h1 className=" has-text-centered is-size-3 is-size-3-mobile">
                Individual Training Schedule
              </h1>
              <a
                className="button is-large"
                href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Individual%20Coaching%20Registration"
                target="_top">
                Register for individual coaching
              </a>
            </div>
          </section>
          <section class="bottom-padding">
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead className="has-background-grey-lighter">
                <tr>
                  <th>Age</th>
                  <th>Location</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <th>8 years and older</th>
                  <td>
                    <a href={this.maplocation} target="blank">
                      Charlie Daniels Park, Mt. Juliet
                    </a>
                  </td>
                  <td>Saturdays 12:45pm unless scheduled otherwise </td>
                  <td>$200 / five sessions</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

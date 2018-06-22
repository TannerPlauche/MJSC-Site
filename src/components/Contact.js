import React, { Component } from 'react';
import '../css/contact.css';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="hero is-fullheight has-text-white">
                    <div className="hero-body">
                        <div className="contact flex alignCenter column text-center">
                            <h1>Join us!</h1>
                            <div className="">
                                <ul>
                                    <li className="unstyled">
                                        <h4>
                                            <a href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Registration%20and%20Information"
                                                target="_top">
                                                E-mail: MountJulietSoccerClub@gmail.com
                                            </a>
                                        </h4>
                                    </li>
                                    <li className="unstyled"> <h4>Phone: (615) 603-0785</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

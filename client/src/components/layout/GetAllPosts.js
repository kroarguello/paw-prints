import React, { Component } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {
    render() {
        return (
            <div className="hero-section content">
                <div className="grid-container" id="find">
                    <h1 id="title">Paw Prints</h1>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-2 cell"></div>
                        <div className="medium-8 cell">
                            <h4>Find Your Lost Pets Here</h4>
                            <div className="grid-container">
                                <div className="grid-x grid-margin-x small-up-2 medium-up-3">
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Hercules.</h4>
                                                <p>He was lost in Anchorage, Alaska.
                                                    My contact info is email@email.net</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Sheila.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Juan.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Hercules.</h4>
                                                <p>He was lost in Anchorage, Alaska.
                                            My contact info is email@email.net</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Sheila.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Juan.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Hercules.</h4>
                                                <p>He was lost in Anchorage, Alaska.
                                            My contact info is email@email.net</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Sheila.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell">
                                        <div className="card">
                                            <img alt="animal" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div className="card-section">
                                                <h4>This is Juan.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="pagination-pointed pagination text-center" role="navigation" aria-label="Pagination">
                                    <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
                                    <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
                                    <li><a className="pagination-pointed-button" href="#" aria-label="Page 2">2</a></li>
                                    <li><a className="pagination-pointed-button" href="#" aria-label="Page 3">3</a></li>
                                    <li><a className="pagination-pointed-button" href="#" aria-label="Page 4">4</a></li>
                                    <li className="ellipsis" aria-hidden="true"></li>
                                    <li className="pagination-next">
                                        <a className="pagination-pointed-button" href="#" aria-label="Next page">
                                            Next <span className="show-for-sr">page</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
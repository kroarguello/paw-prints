import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./footer.css";


class Footer extends Component {
  render() {
    return (
        <div className="marketing-site-footer-bottom">
        <div className="row large-unstack align-middle">
            <div className="column">
                <img  className="image" src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                    alt="paw prints" /> {/*style="height:50px;"*/}
                &copy; 2020 Group 3
                <img  className="image" src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                    alt="paw prints" />{/*style="height:50px"*/}
            </div>
        </div>
    </div>
    );
  }
}
export default Footer;
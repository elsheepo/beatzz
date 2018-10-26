import React, { Component } from "react";

class Footer extends Component {
  
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container text-center">
            <p>&copy; 2017-2018 beatzz.co <a className="pointer" onClick={this.props.displayPrivacyClicked}>Terms & Privacy</a></p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

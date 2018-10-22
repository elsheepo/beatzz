import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  handlePrivacyClick = () => { document.getElementById('privacyModal').style.display = 'block'; }
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container text-center">
            <p>&copy; 2017-2018 beatzz.co <a href="#" onClick={this.handlePrivacyClick}>Terms & Privacy</a></p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

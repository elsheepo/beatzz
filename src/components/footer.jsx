import React from "react";

const footerStyle = {
  backgroundColor: "#343a40",
  fontSize: "16px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  lineHeight: "10px",
  padding: "20px",
  position: "absolute",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}><p>&copy; 2017-2018 beatzz.co <a className="pointer" onClick={this.props.displayPrivacyClicked}>Terms & Privacy</a></p></div>
      </div>
    );
  }
}
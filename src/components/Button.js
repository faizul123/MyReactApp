import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  handleClick(e) {
    alert("clicked");
    e.preventDefault();
  }
  render() {
    return (
      <div className="btn" onClick={this.handleClick}>
        {this.name}
      </div>
    );
  }
}

export default Button;

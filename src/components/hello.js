import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Welcome to this test page {this.props.firstName} {this.props.lastName}</div>;
  }
}

export default Hello;

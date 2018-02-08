import React from "react";
import "./flat.css"

class Flat extends React.Component {
  render() {

    const bImage = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };

    return (
      <div className="flat">
        <div className="flat-picture" style = {bImage}></div>
        <div className="flat-title">
          {this.props.flat.price} {this.props.flat.priceCurrency} - {this.props.flat.name}
        </div>
      </div>
    )
  }
}

export default Flat;

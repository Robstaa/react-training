import React from "react";
import "./flat.css"

class Flat extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.flat)
  }
  render() {

    const bImage = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };

    return (
      <div className="flat" onClick={this.handleClick} >
        <div className="flat-picture" style = {bImage}></div>
        <div className="flat-title">
          {this.props.flat.price} {this.props.flat.priceCurrency} - {this.props.flat.name}
        </div>
      </div>
    )
  }
}

export default Flat;

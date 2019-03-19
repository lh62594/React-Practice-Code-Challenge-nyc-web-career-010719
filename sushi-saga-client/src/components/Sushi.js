import React, { Component } from 'react'

class Sushi extends Component {
  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={() => this.props.eatSushi(this.props.sushi.id)}>
          {
            this.props.sushi.eaten
            ?
            null
            :
            <img src={this.props.sushi.img_url} width="100%" alt="yummy sushi"/>
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi

import React, { Component, Fragment } from 'react'

class Table extends Component {
  state = {
    money: ''
  }

  renderPlates = () => {
    return this.props.sushiEaten.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  handleChange = (e) => {
    this.setState({ money: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(this.state.money)
    this.setState({ money: '' })
  }

  render() {
    // console.log(this.state.money);
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.wallet} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              this.renderPlates()
            }
          </div>
        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>Add money to your wallet!</label>
          <br />
          <input onChange={(e) => this.handleChange(e)} name="money" value={this.state.money}/>
          <input type="submit" />
        </form>

      </Fragment>
    )
  }
}

export default Table

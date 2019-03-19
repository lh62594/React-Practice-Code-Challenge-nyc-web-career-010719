import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    curPage: 1,
    curSushi: [],
    sushiEaten: [],
    wallet: 50
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then( json => {
      // mapping through the sushi and adding a key value pair
      // will determine if the sushi is eaten or not
      let sushis = json.map( obj => {
        return {...obj, eaten: false}
      })

      this.setState({
        sushis,
        curSushi: sushis.slice(0,4)
      })
    })
  }

  eatSushi = (id) => {
    let sushi = this.state.sushis.find( sushi => sushi.id === id )

    if (sushi.price <= this.state.wallet) {
      sushi.eaten = true
      this.setState( prevState => {
        return {
          wallet: prevState.wallet - sushi.price,
          sushiEaten: [...prevState.sushiEaten, sushi]
        }
      })
    }

  }

  showMoreSushi = () => {
    // let that = this
    // debugger

    if (this.state.curPage < 25) {
      let newIndex = this.state.curPage*4

      this.setState( prevState => {
        return ({
          curPage: prevState.curPage += 1,
          curSushi: prevState.sushis.slice(newIndex, newIndex + 4)
        })
      })
    } else {
      this.setState({
        curPage: 1,
        curSushi: this.state.sushis.slice(0, 4)
      })
    }
  }

  addMoneyToWallet = (money) => {
    // console.log(parseInt(money) + this.state.wallet);
    this.setState( prevState => {
      return {wallet: parseInt(money) + prevState.wallet}
    })
  }

  render() {
    // console.log(this.state.wallet);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.curSushi}
          eatSushi={this.eatSushi}
          showMoreSushi={this.showMoreSushi}
          />

        <Table
          sushiEaten={this.state.sushiEaten}
          wallet={this.state.wallet}
          addMoney={this.addMoneyToWallet}
          />
      </div>
    );
  }
}

export default App;

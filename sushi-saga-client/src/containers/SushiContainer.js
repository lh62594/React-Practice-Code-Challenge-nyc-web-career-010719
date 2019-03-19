import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props.sushis);

  return (
    <Fragment>
      <div className="belt">

        { props.sushis.map( sushi => {
          return (
            <Sushi
              key={sushi.id}
              sushi={sushi}
              eatSushi={props.eatSushi}
            />
          )
        })}

        <MoreButton showMoreSushi={props.showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer

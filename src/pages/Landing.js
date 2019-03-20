import React, { Component } from 'react'
import { getBeers } from '../store/actions/beerActions'
import { connect } from 'react-redux'

class Landing extends Component {
  componentDidMount() {
    this.props.getBeers()

  }
  render() {
    const { beers } = this.props
    console.log(this.props)
    return (
      <div>
        <h1>Landing</h1>
        {beers && beers.map(beer => {
          return (
            <p>{beer.name}</p>
          )
        })}

      </div>
    )
  }
}
const mapStateToProp = (state) => {
  console.log(state)
  return {
    beers: state.beer.data,
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    getBeers: () => dispatch(getBeers()),
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(Landing)
import React, { Component } from 'react'
import { getBeers } from '../store/actions/beerActions'
import { connect } from 'react-redux'
import BeerList from '../components/Beer/BeerList'
import Typography from '@material-ui/core/Typography';

class Beers extends Component {
    componentDidMount() {
        this.props.getBeers()

    }
    render() {
        const { beers } = this.props
        console.log(beers)
        return (
            <div>
                <Typography component="h2" variant="h2" gutterBottom>
                    Beers
      </Typography>
                <BeerList beers={beers} />
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        beers: state.beer.beers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBeers: () => dispatch(getBeers()),
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Beers)
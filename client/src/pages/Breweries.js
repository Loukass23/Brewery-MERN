import React, { Component } from 'react'
import { getBreweries } from '../store/actions/beerActions'
import { connect } from 'react-redux'
import BeerList from '../components/Beer/BeerList'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



class Breweries extends Component {
    componentDidMount() {
        this.props.getBreweries()

    }
    render() {
        const { breweries } = this.props
        console.log(breweries)
        return (
            <Grid
                px='3px'
                container
                spacing={24}>
                <Grid item xs={12}>

                    <Typography component="h2" variant="h2" gutterBottom>
                        Beers</Typography>
                    <BeerList breweries={breweries} />
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProp = (state) => {
    console.log(state)
    return {
        breweries: state.beer.breweries,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBreweries: () => dispatch(getBreweries()),
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Breweries)
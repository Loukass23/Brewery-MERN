import React from 'react'
import BeerCard from './BeerCard'
import Grid from '@material-ui/core/Grid';


const BreweryList = ({ breweries }) => {
    return (
        <div className="beers-list section">
            <Grid
                container
                spacing={24}
                justify="center"
                style={{ minHeight: '100vh' }}>

                {breweries && breweries.map(brewery => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={brewery.id}>

                            <BeerCard beer={brewery} />

                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default BreweryList


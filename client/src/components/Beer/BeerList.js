import React from 'react'
import BeerCard from './BeerCard'
import Grid from '@material-ui/core/Grid';


const BeerList = ({ beers }) => {
    return (
        <div className="cities-list section">
            <Grid container spacing={16}>

                {beers && beers.map(beer => {
                    return (
                        <Grid item xs={6} >

                            <BeerCard beer={beer} />

                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default BeerList


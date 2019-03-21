import React from 'react'
import BeerCard from './BeerCard'
import Grid from '@material-ui/core/Grid';


const BeerList = ({ beers }) => {
    return (
        <div className="cities-list section">
            <Grid
                container
                direction='column'
                wrap='wrap'
                spacing={12}
                justify="center"
                style={{ minHeight: '100vh' }}>

                {beers && beers.map(beer => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={beer.id}
                            justify="center">

                            <BeerCard beer={beer} />

                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default BeerList


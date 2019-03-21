import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    card: {
        color: theme.palette.text.secondary,
        width: '200',
        height: '100px'



    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
});




const BeerCard = ({ beer, classes }) => {
    return (
        <>
            <Card className={classes.card}
                raised>
                <CardActionArea>
                    {beer.image_url &&
                        <CardMedia
                            component="img"
                            alt="beer"
                            className={classes.media}

                            image={beer.image_url}
                            title="beer"
                        />}
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            {beer.name}
                        </Typography>
                        <Typography component="p">
                            {beer.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Link to={'/beer/' + beer.id} key={beer.id}>

                        <Button size="small" color="primary">

                            Learn More
        </Button></Link>
                </CardActions>
            </Card>

        </>
    )
}
BeerCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerCard);

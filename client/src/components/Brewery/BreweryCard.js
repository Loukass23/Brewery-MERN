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
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        display: 'flex',
        height: '400px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    content: {
        flex: '1 0 auto',

    },
    cover: {
        minWidth: '100px',


    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
});




const BreweryCard = ({ brewery, classes }) => {
    return (
        <>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {brewery.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {brewery.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>
                </div>

                <CardMedia
                    className={classes.cover}
                    image={brewery.image}
                    title={brewery.name}
                />

            </Card>



        </>
    )
}
BreweryCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BreweryCard);

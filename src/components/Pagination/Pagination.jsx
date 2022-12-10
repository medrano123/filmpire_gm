import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './styles'

const Pagination = ({ currentPage, page, totalPages }) => {
    const classes = useStyles();
   //const currentPage =1; 

    const handleNext = () => {

    }

    const handlePrev = () => {

    }
    return (
        <div className={classes.container}>
            <Button onClick={handlePrev} className={classes.button} variant= "contained" color="primary" type='button'>  
                Prev
            </Button>
            <Typography variant="h4" className={classes.pageNumber}>{currentPage}</Typography>
            <Button onClick={handleNext} className={classes.button} variant= "contained" color="primary" type='button'>  
                Next
            </Button>
        </div>
    )
}

export default Pagination
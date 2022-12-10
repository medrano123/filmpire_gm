import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies }) => {
  	const classes = useStyles();
  	//const startFrom = excludeFirst ? 1 : 0;

  	return (
   		<Grid container className={classes.moviesContainer}>
       		{movies.results.slice(0, numberOfMovies).map((movie, i) => (
        		<Movie key={i} movie={movie} i={i} />
      		))}
   		</Grid>
 	);
};

export default MovieList;

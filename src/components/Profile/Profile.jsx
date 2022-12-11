import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { RatedCards } from '../';
import { useGetListQuery } from '../../services/TMDB'; 
import { userSelector } from '../../features/auth';

const Profile = () => {
	const { user } = useSelector(userSelector);
	//const favoriteMovies = [];
	const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
	const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
	//console.log(user);

	useEffect(() => {
		refetchFavorites()
		refetchWatchlisted()
	}, [])
	
	const logout = () => {
		localStorage.clear(); 
		window.location.href='/'
	}

    return (
     	<Box>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h4" gutterBottom>My Profile</Typography>
				<Button color="inherit" onClick={logout}>
					Logout &nbsp; <ExitToApp />
				</Button>
			</Box>
			{!favoriteMovies?.results?.length && !watchlistMovies?.results?.length 
				? <Typography variant="h5">Add favorites or watchlist some movies</Typography>
				: (
					<Box>
					 	<RatedCards title="Favorite Movies" data={favoriteMovies} />
						 <RatedCards title="Watchlist" data={watchlistMovies} />

					</Box>
				)}
		</Box>
    )
}

export default Profile
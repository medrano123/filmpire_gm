import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { searchMovie } from '../../features/currentGenreOrCategory';
import useStyles from './styles';

const Search = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [query, setQuery] = useState('')
    const location = useLocation();
    //console.log('Search')

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            //console.log('here  ', query)
            dispatch(searchMovie(query)) 
        }
    }

    if(location.pathname !== '/') return null;
    
    return (
        <div className={classes.searchContainer}>
            <TextField
                onKeyPress={handleKeyPress}
                value= {query}
                onChange={(e) => setQuery(e.target.value)}
                variant="standard"
                InputProps={{
                    className: classes.input,
                    startAdornment: (
                        <InputAdornment position= "start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
                >
                
            </TextField>
        </div>
    ) 
}

export default Search
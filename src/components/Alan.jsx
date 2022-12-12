import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';

const useAlan = () => {
    const { setMode } = useContext(ColorModeContext);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        alanBtn({
            key: 'c4b871cd6b54ad687ddb610361dd4abb2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, mode }) => {
                if ( command === 'changeMode') {
                // Call the client code that will react to the received command
                    if( mode === 'light' ) {
                        setMode('light')
                    } else {
                        setMode('dark')
                    }
                } else if (command === 'login') {
                    console.log(command)
                    fetchToken(); 
                } else if (command === 'logout'){
                    localStorage.clear(); 
                    window.location.href='/'
                }
            }
        });
    }, []);
}

export default useAlan
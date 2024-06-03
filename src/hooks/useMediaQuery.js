import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (event) => {
            setMatches(event.matches);
        };

        //the initial state
        setMatches(media.matches);

        // Add 
        media.addEventListener('change', listener);

        // Remove 
        return () => media.removeEventListener('change', listener);
    }, [query]); 

    return matches;
}

export default useMediaQuery;

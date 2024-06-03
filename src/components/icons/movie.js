import { useTheme } from "../../contexts/themeContext";
const Movie = () =>{
    const{ theme} = useTheme();
    return <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1H2C1.44772 1 1 1.44772 1 2V16C1 16.5523 1.44772 17 2 17H16C16.5523 17 17 16.5523 17 16V2C17 1.44772 16.5523 1 16 1ZM16 1L12 5M17 5H1M2 5L6 1M7 5L11 1M7 8V14L11 11L7 8Z" stroke={theme.colors.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  
}

export default Movie;
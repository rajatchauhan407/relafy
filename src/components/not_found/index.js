import { useTheme } from "../../contexts/themeContext"
import NotFoundIcon from "../icons/not_found";
import Typography from "../typography";
export const NotFound = ({text}) => { 
    const {theme} = useTheme();
    return (
        <div style={{
            background: theme.colors.tertiary,
            width: '100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderRadius: '10px',
            height: '300px',
            gap:'1rem'
        }}>
            <NotFoundIcon />
            <Typography variant='heading' weight='bold' fontFamily='heading' color='secondary'>
                {text}
            </Typography>
        </div>
    )
}
export default NotFound;
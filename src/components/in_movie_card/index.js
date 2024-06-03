import styles from './index.module.css';
import Typography from '../typography';
import {useTheme} from '../../contexts/themeContext';
const InMovieCard = ({ Icon, actors, languages, title,info }) => {
    const { theme } = useTheme();
    return (
        <div className={styles.cardContainer} style={{
            background: theme.colors.tertiary
        }}>
        {Icon && <Icon />}
            
            {
                actors && actors.split(',').map((actor, index) => { 
                    
                    return (
                         <Typography styles={index === 0 ? {
                            paddingTop:'1rem',
                            color: theme.colors.secondary,
                         }:{
                            color: theme.colors.secondary
                         }} key={index} variant='default' weight='normal' fontFamily='body' 
                         >
                        {actor}
                    </Typography>
                )})
            }

            {
                languages && languages.split(',').map((actor, index) => { 
                    
                    return (
                         <Typography styles={index === 0 ? {
                            paddingTop:'1rem',
                            color: theme.colors.secondary,
                         }:{
                            color: theme.colors.secondary
                         }} key={index} variant='default' weight='normal' fontFamily='body' 
                         >
                        {actor}
                    </Typography>
                )})
            }
          {
                title && (<><Typography variant='caption' weight='bold' fontFamily='heading' styles={{
                    padding: '.5rem 0'
                }}>
                    {title}
                </Typography>
                <Typography variant='default' weight='normal' fontFamily='body' color='secondary'>
                    {info}
                </Typography>
                </>
                )
          }
        </div>
    )
}

export default InMovieCard;
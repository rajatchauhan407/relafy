import styles from './index.module.css';
import Typography from '../typography';
import InMovieCard from '../in_movie_card';
import MovieIcon from '../icons/movie';
import LanguageIcon from '../icons/language';
import { useTheme } from '../../contexts/themeContext';
const MovieCard = ({ movie }) => {
    

    const { theme } = useTheme();
    return (
        <div className={styles.cardContainer}>
            <div className={styles.poster}>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <Typography variant='caption' weight='bold' fontFamily='heading' styles={{
                padding: '.5rem 0'
            }}>
                {movie.Title} {movie.Year} - {movie.Rated} - {movie.Runtime}
            </Typography>

            <div className={styles.inMovieCardContainer}>
                <InMovieCard 
                    Icon={MovieIcon}
                    actors={movie.Actors}
                />
                <InMovieCard 
                    Icon={LanguageIcon}
                    languages={movie.Language}
                />
            </div>
            <div className={styles.plot} style={{
                background:theme.colors.tertiary,
            }}>
                <Typography variant='default' weight='normal' fontFamily='body' color='secondary'>
                    {movie.Plot}
                </Typography>
            </div>
            <div className={styles.info}>
                <InMovieCard
                    title='Director'
                    info={movie.Director}
                />
                <InMovieCard
                    title='Director'
                    info={movie.Director}
                />
                <InMovieCard
                    title='Writer'
                    info={movie.Writer}
                />
                <InMovieCard
                    title='Awards'
                    info={movie.Awards}
                />
                <InMovieCard
                    title='BoxOffice'
                    info={movie.BoxOffice}
                />
            </div>
        </div>
    )
}

export default MovieCard;
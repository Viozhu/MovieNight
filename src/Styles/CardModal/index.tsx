import { Movie } from '@graphqlTypes'
import { useState } from 'react'
import dayjs from 'dayjs'
import { addFavMovie, removeFavMovie } from '@reduxSlicesFav'
import { addWishMovie, removeWishMovie } from '@reduxSlicesWish'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/Redux'
import { Dispatch } from '@reduxjs/toolkit'
import StartRating from './StarRating'
import UseSimilarMovies from './useGetSimilarMovies'
import * as styles from './styles'
import Icon from '../Icon'

type Props = {
  item: Movie
}

function CardModal({ item }: Props) {
  const [currentItem, setcurrentItem] = useState<Movie | any>(item)

  const { id, overview, poster_path, release_date, title, vote_average, runtime, genres } =
    currentItem

  const { status, data } = UseSimilarMovies({
    variables: {
      id,
    },
    enabled: !!id,
  })

  const movies: Array<Movie> = useSelector((state: RootState) => state.counter.value)
  const wish: Array<Movie> = useSelector((state: RootState) => state.wishlist.value)

  const dispatch: Dispatch = useDispatch()

  const haveFavMovie: Movie = movies.find((movie) => movie.id === id)
  const haveWishMovie: Movie = wish.find((movie) => movie.id === id)

  const handleAddOrRemoveFavMovie = (): void => {
    if (haveFavMovie) {
      dispatch(removeFavMovie(currentItem))
    } else {
      dispatch(addFavMovie(currentItem))
    }
  }

  const handleAddOrRemoveWishMovie = (): void => {
    if (haveWishMovie) {
      dispatch(removeWishMovie(currentItem))
    } else {
      dispatch(addWishMovie(currentItem))
    }
  }

  const sliceController = (direction: string) => {
    const contenedor = document.getElementById('sliceContenedorRelated')
    const scrollOffset = 600

    if (direction === 'left') {
      contenedor.scrollTo({
        left: contenedor.scrollLeft - scrollOffset,
        behavior: 'smooth',
      })
    } else {
      contenedor.scrollTo({
        left: contenedor.scrollLeft + scrollOffset,
        behavior: 'smooth',
      })
    }
  }

  const isMobile: boolean = window.innerWidth < 768

  return (
    <div className={styles.CONTAINER}>
      <div className={styles.IMG_CONTAINER}>
        <img
          src={`https://image.tmdb.org/t/p/w${isMobile ? 185 : 400}${poster_path}`}
          alt={title}
          className='rounded '
        />
      </div>
      <div className={styles.DESCRIPTION_CONTAINER}>
        <div className={styles.TITLE_STAR}>
          <h1 className='text-4xl'>{title}</h1>
          <StartRating vote={vote_average} />
        </div>
        <p>{`${dayjs(release_date).format('DD/MM/YYYY')} | ${runtime ?? '0'} hs`}</p>
        <p>{overview}</p>
        <div className={styles.BUTTON_CONTAINER}>
          <button className={styles.BUTTON} onClick={handleAddOrRemoveWishMovie}>
            {haveWishMovie ? 'Remove' : 'Add'} to watchlist
          </button>
          <button className={styles.BUTTON} onClick={handleAddOrRemoveFavMovie}>
            {haveFavMovie ? 'Remove' : 'Add'} to favorites
          </button>
        </div>
        <div className={styles.RELATED_CONTAINER}>
          <h1 className={styles.RELATED_TITLE}>Related movies</h1>
          <div className={styles.RELATED_MOVIE_CONTAINER}>
            {data?.similarMovies?.length > 0 ? (
              <div className={styles.ARROW_CONTAINER}>
                <Icon
                  name='chevron-thin-left'
                  color='8B7C6E'
                  onClick={() => sliceController('left')}
                  style={styles.ARROW}
                />
                <div className={styles.RELATED_MOVIES} id='sliceContenedorRelated'>
                  {data?.similarMovies.map((movie) => (
                    <div
                      className={styles.RELATED_MOVIE}
                      key={`${item.id}similar`}
                      onClick={() => setcurrentItem(movie)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                        alt={movie.title}
                        className='rounded'
                      />
                      <p className={styles.RELATED_MOVIE_TEXT}>{movie.title}</p>
                    </div>
                  ))}
                </div>
                <Icon
                  name='chevron-thin-right'
                  color='8B7C6E'
                  onClick={() => sliceController('right')}
                  style={styles.ARROW}
                />
              </div>
            ) : (
              <p className={styles.NO_RELATED}>No related movies</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardModal

import { Movie } from '@graphqlTypes'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@reduxStore'
import { removeWishMovie } from '@reduxSlicesWish'
import '../../styles.css'

import { Dispatch } from '@reduxjs/toolkit'
import * as styles from './styles'

type Props = {}

function WishListMenu(): JSX.Element {
  const wish: Array<Movie> = useSelector((state: RootState) => state.wishlist.value)

  const dispatch: Dispatch = useDispatch()

  return (
    <div className={styles.MENU_CONTAINER}>
      <div className={styles.TEXT_CONTAINER}>
        <h2 className='font-bold text-4xl'>My wish list</h2>
        <p className='text-xl'>Here will be all your wish movies</p>
      </div>
      <div className={styles.CARD_CONTAINER}>
        {wish.length > 0 ? (
          wish.map((item) => (
            <ul className={styles.CARD} key={`${item.id}wish`}>
              <div className={styles.CARD_CONTENT} key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                  className='rounded-t'
                  alt='image'
                  width={200}
                />
                <div className={styles.TEXT_CONTENT}>
                  <p className='text-center '>{item.title}</p>
                </div>
                <div
                  className={styles.TEXT_CONTENT_DELETE}
                  onClick={() => dispatch(removeWishMovie(item))}
                >
                  <p className='text-center '>Remove</p>
                </div>
              </div>
            </ul>
          ))
        ) : (
          <div className='h-24 flex items-center justify-center w-full'>
            <p className='text-center text-2xl'>No movies added yet 😭</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WishListMenu

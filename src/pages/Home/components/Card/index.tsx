import { Movie } from '@graphqlTypes'
import * as styles from './styles'

type Props = { item: Movie; onClick: () => void }

function Card({ item, onClick }: Props) {
  return (
    <ul className={styles.CARD} key={item.id}>
      <div className={styles.CARD_CONTENT} key={item.id} onClick={onClick}>
        <img
          src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
          className='rounded-t'
          alt='image'
          width={200}
        />
        <div className={styles.TEXT_CONTENT}>
          <p className='text-center '>{item.title}</p>
        </div>
      </div>
    </ul>
  )
}

export default Card

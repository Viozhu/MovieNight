import { useState, useEffect } from 'react'
import * as styles from './styles'

import { Tabs } from './components'
import Banner from './components/Banner'
import useGetAllMovies from './graphql/queries/useGetAllMovies'

function Home() {
  const [moviesList, setMoviesList] = useState({
    popularMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
  })
  const { status, data } = useGetAllMovies()

  useEffect(() => {
    if (status === 'success' && data) {
      setMoviesList({
        popularMovies: data.popularMovies,
        upcomingMovies: data.upcomingMovies,
        nowPlayingMovies: data.nowPlayingMovies,
      })
    }
  }, [status, data])

  return (
    <div>
      <div className='w-screen'>
        <img
          src='https://images.unsplash.com/photo-1611021809244-83074a8a42c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='images'
          className={styles.BANNER_IMG}
        />
        <Banner data={moviesList.upcomingMovies} />
      </div>

      <Tabs
        data={moviesList.upcomingMovies}
        id='upcomingMovies'
        status={status}
        title='Upcoming Movies'
        subTitle='These are the upcoming releases.'
      />
      <Tabs
        data={moviesList.popularMovies}
        id='popularMovies'
        status={status}
        title='Trending now'
        subTitle='These are the most popular movies'
      />
      <Tabs
        data={moviesList.nowPlayingMovies}
        id='nowPlayingMovies'
        status={status}
        title='Now playing Movies'
        subTitle='These are the movies that are currently playing in theaters.'
      />
      <Tabs
        data={moviesList.popularMovies}
        id='popularMovies2'
        status={status}
        title='Top Picks for you'
        subTitle='These are the most popular movies'
      />
    </div>
  )
}

export default Home

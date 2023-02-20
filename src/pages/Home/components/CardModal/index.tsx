import { Movie } from '@graphqlTypes';
import React from 'react';
import StartRating from './StarRating';
import dayjs from 'dayjs';
import { addFavMovie, removeFavMovie } from '@reduxSlicesFav';
import { addWishMovie, removeWishMovie } from '@reduxSlicesWish';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/Redux';
import { Dispatch } from '@reduxjs/toolkit';
import UseSimilarMovies from '../../graphql/queries/useGetSimilarMovies';

type Props = {
  item: Movie;
};

const CardModal = ({ item }: Props) => {
  const {
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    runtime,
    genres,
  } = item;

  const { status, data } = UseSimilarMovies({
    variables: {
      id: id,
    },
    enabled: !!id,
  });

  const movies: Array<Movie> = useSelector(
    (state: RootState) => state.counter.value,
  );
  const wish: Array<Movie> = useSelector(
    (state: RootState) => state.wishlist.value,
  );

  const dispatch: Dispatch = useDispatch();

  const haveFavMovie: Movie = movies.find((movie) => movie.id === id);
  const haveWishMovie: Movie = wish.find((movie) => movie.id === id);

  const handleAddOrRemoveFavMovie = (): void => {
    if (haveFavMovie) {
      dispatch(removeFavMovie(item));
    } else {
      dispatch(addFavMovie(item));
    }
  };

  const handleAddOrRemoveWishMovie = (): void => {
    if (haveWishMovie) {
      dispatch(removeWishMovie(item));
    } else {
      dispatch(addWishMovie(item));
    }
  };

  const isMobile: boolean = window.innerWidth < 768;
  console.log(item);
  return (
    <div className="text-brown-1 p-4 flex justify-between flex-col w-full md:flex-row">
      <div className="w-full flex justify-center items-center">
        <img
          src={
            `https://image.tmdb.org/t/p/w${isMobile ? 185 : 400}` + poster_path
          }
          alt={title}
          className="rounded "
        />
      </div>
      <div className=" w-auto md:w-1/2  space-y-6 flex flex-col justify-around">
        <div className="flex flex-col md:flex-row space-y-4 mt-4 md:mt-0 md:space-x-12 justify-between ">
          <h1 className="text-4xl">{title}</h1>
          <StartRating vote={vote_average} />
        </div>
        <p>{`${dayjs(release_date).format('DD/MM/YYYY')} | genre_ids | ${
          runtime ?? '0'
        } hs`}</p>
        <p>{overview}</p>
        <div className="flex justify-end items-center space-x-4">
          <button
            className="bg-brown-3 text-white rounded px-4 w-52 py-2"
            onClick={handleAddOrRemoveWishMovie}
          >
            {haveWishMovie ? 'Remove' : 'Add'} to watchlist
          </button>
          <button
            className="bg-brown-3 text-white rounded px-4 w-52 py-2"
            onClick={handleAddOrRemoveFavMovie}
          >
            {haveFavMovie ? 'Remove' : 'Add'} to favorites
          </button>
        </div>
        <div className="flex flex-col mt-2 justify-between">
          <h1 className="text-2xl">Related movies</h1>
          <div className=" w-full md:w-[35vw]">
            <div className="flex space-x-3 w-full p-2 pb-0 overflow-x-auto scrollbar-hide">
              {data?.similarMovies ? (
                data?.similarMovies.map((movie) => (
                  <div className="w-[92px] min-w-[92px] flex flex-col itemx-center justify-center">
                    <img
                      src={'https://image.tmdb.org/t/p/w92' + movie.poster_path}
                      alt={movie.title}
                      className="rounded"
                    />
                    <p className="text-xs truncate text-center mt-1">
                      {movie.title}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center my-5">No related movies</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

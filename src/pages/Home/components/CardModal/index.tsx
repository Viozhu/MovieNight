import { Movie } from "@graphqlTypes";
import React from "react";
import StartRating from "./StarRating";
import dayjs from "dayjs";
import { addFavMovie, removeFavMovie } from "@redux/counterFav";
import { addWishMovie, removeWishMovie } from "@redux/counterWishlist";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/Redux";
import { Dispatch } from "@reduxjs/toolkit";

type Props = {
  item: Movie;
};

const CardModal = ({ item }: Props) => {
  const { id, overview, poster_path, release_date, title, vote_average } = item;

  const movies: Array<Movie> = useSelector(
    (state: RootState) => state.counter.value
  );
  const wish: Array<Movie> = useSelector(
    (state: RootState) => state.wishlist.value
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

  const similarMovies = [
    {
      title: "장고: 분노의 추적자",
      poster_path: "/cDW2Ro4HPhsYgRKyGI9CA33gTpn.jpg",
    },
    {
      title: "아이언맨 3",
      poster_path: "/pGMfidaVkjMVHXNIl7yippnipFT.jpg",
    },
    {
      title: "퍼시픽 림",
      poster_path: "/BWJhHHqeW5oCRvqLXF5twAFAga.jpg",
    },
    {
      title: "트랜스",
      poster_path: "/3MVYuyVknNA9yC0Gy6z3zDAiWfX.jpg",
    },
    {
      title: "워크래프트: 전쟁의 서막",
      poster_path: "/gQgVIElQcC7Rfhjr6E6DxWg5v77.jpg",
    },
    {
      title: "Conquest of the Earth",
      poster_path: "/t1NOy1K9sRy9LDvFY0DurwtR4LM.jpg",
    },
    {
      title: "잃어버린 세계를 찾아서 2: 신비의 섬",
      poster_path: "/uHiszYVqR9zVs7IgVvMUabmx9Ag.jpg",
    },
    {
      title: "Ed Mort",
      poster_path: "/jBSvLUabK6Crre98fDXTqVWEHAs.jpg",
    },
    {
      title: "파라노말 액티비티 3",
      poster_path: "/vQOAeSs0mnjgQSxW3wqfWMYseOL.jpg",
    },
    {
      title: "Alle Tijd",
      poster_path: "/xJ3JQUamPqXzhJe28oI1mogheSd.jpg",
    },
    {
      title: "아메리칸 파이: 19금 동창회",
      poster_path: "/imTVfzobOYodN96b7KbFWY6bnQt.jpg",
    },
    {
      title: "피라냐 3DD",
      poster_path: "/zrfSsY2DlIf99d54GNloHx6fnl6.jpg",
    },
    {
      title: "호스텔 3",
      poster_path: "/ieO49ludO6DxRVV8u1LKMjtrDLN.jpg",
    },
    {
      title: "고스트 라이더 3D : 복수의 화신",
      poster_path: "/2QzhvWK3F2ChEp48OOSYgvSJMxn.jpg",
    },
    {
      title: "레지던트 이블 5: 최후의 심판",
      poster_path: "/1fHlc88V6BvItBYc4u7Unu7jIxB.jpg",
    },
    {
      title: "다크 나이트",
      poster_path: "/dSA5fLdk14CglFluKVMohrjo7L4.jpg",
    },
    {
      title: "The Return of Captain Invincible",
      poster_path: "/gTdItOSkEkNbWd2sWfIRPDMFYtE.jpg",
    },
    {
      title: "마블 원-샷: 토르의 망치를 가지러 가던 길의 기묘한 사건",
      poster_path: "/s1E2JwX798f4ssefszQJDTBMrjb.jpg",
    },
    {
      title: "저스티스 리그: 둠",
      poster_path: "/seCbcjdZYUl8SRKjeWfyi2ngzFj.jpg",
    },
    {
      title: "텍사스 전기톱 연쇄살인사건 3D",
      poster_path: "/dwIQ7WDCSiIcNdbferTcU7uI0KV.jpg",
    },
  ];

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
        <p>{`${dayjs(release_date).format(
          "DD/MM/YYYY"
        )} | genre_ids | runtime`}</p>
        <p>{overview}</p>
        <div className="flex justify-end items-center space-x-4">
          <button
            className="bg-brown-3 text-white rounded px-4 w-52 py-2"
            onClick={handleAddOrRemoveWishMovie}
          >
            {haveWishMovie ? "Remove" : "Add"} to watchlist
          </button>
          <button
            className="bg-brown-3 text-white rounded px-4 w-52 py-2"
            onClick={handleAddOrRemoveFavMovie}
          >
            {haveFavMovie ? "Remove" : "Add"} to favorites
          </button>
        </div>
        <div className="flex flex-col mt-2 justify-between">
          <h1 className="text-2xl">Related movies</h1>
          <div className=" w-full md:w-[35vw]">
            <div className="flex space-x-3 w-full p-2 pb-0 overflow-x-auto scrollbar-hide">
              {similarMovies &&
                similarMovies.map((movie) => (
                  <div className="w-[92px] min-w-[92px] flex flex-col itemx-center justify-center">
                    <img
                      src={"https://image.tmdb.org/t/p/w92" + movie.poster_path}
                      alt={movie.title}
                      className="rounded"
                    />
                    <p className="text-xs truncate text-center mt-1">{title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

import { useState } from "react";

import data from "./graphql/queries/fakePopularMovies.json";
import { useDispatch } from "react-redux";

import * as styles from "./styles";
import "./style.css";
import { Icon } from "@styleComponents";
import UsePopularMovies from "./graphql/queries/usePopularMovies";
import Card from "./components/Card";
import { Tabs } from "./components";

const Home = () => {
  const { status, data: dataTest, error, refetch } = UsePopularMovies({});

  const scrollSmooth = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1611021809244-83074a8a42c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="image"
          className="w-full object-fit h-[92vh]"
        />

        <div className="absolute top-20 left-0 w-full flex flex-col justify-center items-center bg-transparent-2  h-[92vh]">
          <div className="text-center flex flex-col items-center space-y-12">
            <h1 className="text-5xl text-brown-3 font-bold">
              Welcome to Movie Nigth
            </h1>
            <p className="text-white text-xl">These are the latest releases.</p>
            <div className="flex space-x-2 lg:space-x-10 mb-12 px-2 overflow-x-auto scrollbar-hide">
              {data?.data.popularMovies.slice(0, 5).map((item) => (
                <img
                  className="object-cover h-full rounded"
                  src={"https://image.tmdb.org/t/p/w185" + item.poster_path}
                  alt="image"
                  width={200}
                />
              ))}
            </div>
          </div>
          <button
            className="bg-white px-4 py-4 mt-32 animate-bounce scale-175 border-2 rounded-full"
            onClick={() => scrollSmooth("conte")}
          >
            <Icon name="arrow-down" />
          </button>
          <div id="conte" />
        </div>
      </div>

      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Popular Movies"
        subTitle="These are the most popular movies"
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Popular Movies"
        subTitle="These are the most popular movies"
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Popular Movies"
        subTitle="These are the most popular movies"
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Popular Movies"
        subTitle="These are the most popular movies"
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Popular Movies"
        subTitle="These are the most popular movies"
      />
    </div>
  );
};

export default Home;

import data from "./graphql/queries/fakePopularMovies.json";

import * as styles from "./styles";

import { Tabs } from "./components";
import Banner from "./components/Banner";
import UsePopularMovies from "./graphql/queries/usePopularMovies";

const Home = () => {
  const { status, data: dataTest, error, refetch } = UsePopularMovies({});

  return (
    <div>
      <div className="w-screen">
        <img
          src="https://images.unsplash.com/photo-1611021809244-83074a8a42c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="image"
          className={styles.BANNER_IMG}
        />
        <Banner data={data?.data.popularMovies} />
      </div>

      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Upcoming Movies"
        subTitle="These are the upcoming releases."
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Trending now"
        subTitle="These are the most popular movies"
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Now playing Movies"
        subTitle="These are the movies that are currently playing in theaters."
      />
      <Tabs
        data={data?.data.popularMovies}
        status={status}
        title="Top Picks for you"
        subTitle="These are the most popular movies"
      />
    </div>
  );
};

export default Home;

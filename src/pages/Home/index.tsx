import { useState } from "react";
import UsePageCharacters from "../usePageCharacters";

const Home = () => {
  const [count, setCount] = useState(0);

  const { status, data } = UsePageCharacters({
    variables: { page: count + 1 },
  });

  console.log(status, data, "data");
  return (
    <div className="App">
      <h1 className="text-3xl text-red-400 font-bold underline">
        Hello world!
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {status === "loading" && <div>loading</div>}
      {status === "error" && <div>error</div>}
      {status === "success" && (
        <div>
          {data?.characters?.results?.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.image} alt="image" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

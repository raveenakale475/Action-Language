import React from "react";
import Api from "../api";
import { useEffect } from "react";
import { useReducer } from "react";
import { initialValue, Reducer } from "./reduce";
import Card from "./Card";
const Css = () => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  const { data, loading, error } = state;

  useEffect(() => {
    dispatch({type:"loading"})
    Api("css")
      .then((res) => dispatch({ type: "Success", payload: res }))
      .catch((err) => dispatch({ type: "error", payload: err }));
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center">
        {loading && <h1 className="justify-center"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="loading....." /></h1>}
      </div>
      <div>{error && <h1 className="justify-center">Server issue</h1>}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "10px",
          marginTop:"10px"
        }}
      >
        {data &&
          data.map((item) => (
            <div>
              {
                <Card
                  name={item.name}
                  owner={item.owner}
                  language={item.language}
                  stargazers_count={item.stargazers_count}
                  forks_count={item.forks_count}
                />
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Css;

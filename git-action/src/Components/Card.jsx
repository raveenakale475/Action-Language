import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
const Card = ({ name, owner, language, stargazers_count, forks_count }) => {
  const src = owner.avatar_url;
  return (
    <div
      className="flex flex-col items-center w-64 p-4 m-auto border-4"
      style={{"box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
    >
      <img src={src} alt={name} width="200" />
      <h4 className="font-bold text-xl">{name}</h4>
      <h4 className="font-bold text-lg text-blue-500">
        {language ? language : "All"}
      </h4>
      <div className="flex gap-5">
        <div className="flex">
          {" "}
          <AiOutlineStar size={30} />
          {stargazers_count}
        </div>
        <div className="flex">
        <GoRepoForked size={30}/>
        {forks_count}</div>
      </div>
    </div>
  );
};

export default Card;

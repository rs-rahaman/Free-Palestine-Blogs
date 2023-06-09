import React from "react";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import { useLoaderData } from "react-router-dom";
import CategoryCart from "../Categories/CategoryCart";

const Home = () => {
  const loadData = useLoaderData();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ backgroundColor: "#ffe0b3", width: "15%" }}>
        <LeftSideBar></LeftSideBar>
      </div>
      <div style={{ width: "70%" }}>
        <div>
          {loadData.map((n, idx) => (
            <CategoryCart key={idx} data={n}></CategoryCart>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "#ffe0b3", width: "15%" }}>
        Right Side Bar
      </div>
    </div>
  );
};

export default Home;

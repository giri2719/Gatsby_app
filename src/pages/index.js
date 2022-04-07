import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
export default function index() {
  const value = <h1>Hello world</h1>;
  return (
    <div>
      <Layout data={value}>
        <h1>Lets start....</h1>
        <StaticImage
          src="https://tse2.mm.bing.net/th?id=OIP.g-gr426fCdrC1-VwTsPCIgHaEO&pid=Api&P=0&w=800&h=800"
          alt="gatsby image"
          layout="constrained"
        />
      </Layout>
    </div>
  );
}

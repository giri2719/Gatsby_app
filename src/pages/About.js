import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
export default function About() {
  const data1 = <h1>Developing a gatsby application</h1>;
  return (
    <div>
      <Layout data={data1}>
        <h1>This is fun....</h1>
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=small"
          alt="dog"
          layout="constrained"
        />
      </Layout>
    </div>
  );
}

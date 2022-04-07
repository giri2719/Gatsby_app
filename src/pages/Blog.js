import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function Blog({ data }) {
  return (
    <div>
      <Layout data="Blog">
        <p>This is Blog page</p>
        <ul>
          {data.allFile.nodes.map((node) => {
            return (
              <li style={{ fontStyle: "italic" }} key={node.name}>
                {node.name}
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}
export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`;

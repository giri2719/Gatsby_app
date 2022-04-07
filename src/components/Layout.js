import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Layout({ data, children }) {
  const getvalue_from_graphql = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <title>{getvalue_from_graphql.site.siteMetadata.title}</title>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Blog">Blog</Link>
      <h4>{data}</h4>
      <h3>{children}</h3>
    </div>
  );
}

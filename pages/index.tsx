import React from "react";
import { GetStaticProps } from "next";

import { Project } from "../project/types";

// types
interface Props {
  projects: Project[];
}

const IndexRoute: React.FC<Props> = () => {
  return <div>{`<IndexRoute />`}</div>;
};

// using getStaticProps from NextJS
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: [],
    },
  };
};

export default IndexRoute;

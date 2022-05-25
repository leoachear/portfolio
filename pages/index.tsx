import React from "react";
import { GetStaticProps } from "next";

import { Project } from "../project/types";
import api from "../project/api";

// types
interface Props {
  projects: Project[];
}

const IndexRoute: React.FC<Props> = ({ projects }) => {
  return <div>{JSON.stringify(projects)}</div>;
};

// using getStaticProps from NextJS
export const getStaticProps: GetStaticProps = async () => {
  const projects = await api.list();

  return {
    props: {
      projects,
    },
  };
};

export default IndexRoute;

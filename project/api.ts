import axios from "axios";
import Papa from "papaparse";

import { Project } from "./types";

export default {
  list: async (): Promise<Project[]> => {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vSDJjU_JdGFDO7JAlmr2wpydr45IIjvxED5ifZpLgBCGuvS8pUQEvhR9OwahsaSzcJzpL8IDocoMXC5/pub?output=csv`,
        {
          responseType: "blob",
        }
      )
      .then(
        (response) =>
          new Promise<Project[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => resolve(results.data as Project[]),
              error: (error) => reject(error.message),
            });
          })
      );
  },
};

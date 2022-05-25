import axios from "axios";

import { Project } from "./types";

export default {
  list: async (): Promise<Project[]> => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDJjU_JdGFDO7JAlmr2wpydr45IIjvxED5ifZpLgBCGuvS8pUQEvhR9OwahsaSzcJzpL8IDocoMXC5/pub?output=csv",
        { responseType: "blob" }
      )
      .then((response) => {
        console.log(response.data);

        return response.data;
      });
  },
};

import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors["purple"],
  },
  styles: {
    global: {
      body: {
        backgroundColor: "primary.50",
      },
    },
  },
  components: {
    Divider: {
      borderColor: "red.200",
      //opacity: 1,
    },
  },
});

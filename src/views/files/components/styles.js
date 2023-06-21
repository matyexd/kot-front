import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    height: 40,
    borderRadius: 10,
    cursor: "pointer",
    transition: "background-color 0.2s linear",
    padding: 10,
    ["&:hover"]: {
      backgroundColor: "#d9d9d9",
    },
  },
  itemIcon: {},
  itemText: {
    marginLeft: 5,
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

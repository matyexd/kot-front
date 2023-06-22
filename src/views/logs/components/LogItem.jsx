import { createStyles, Grid } from "@mantine/core";
import { useMemo } from "react";

const LogItem = ({ id, userName, fileName, operation, date }) => {
  const { classes } = useStyles();

  const bgColor = useMemo(() => {
    switch (operation) {
      case "UPLOADED":
        return "#aac5ff";
      case "DOWNLOADED":
        return "#a7ffb2";
      case "DELETED":
        return "#ffbac4";

      default:
        return "#ff8e9b";
    }
  }, [operation]);

  const operationName = useMemo(() => {
    switch (operation) {
      case "UPLOADED":
        return "Загрузка файла";
      case "DOWNLOADED":
        return "Скачивание файла";
      case "DELETED":
        return "Удаление файла";

      default:
        return "#ff8e9b";
    }
  }, [operation]);

  return (
    <Grid mt={10} className={classes.root} sx={{ backgroundColor: bgColor }}>
      <Grid.Col md={1}>{id}</Grid.Col>
      <Grid.Col md={3}>{userName}</Grid.Col>
      <Grid.Col md={3}>{fileName}</Grid.Col>
      <Grid.Col md={3}>{operationName}</Grid.Col>
      <Grid.Col md={2}>{date}</Grid.Col>
    </Grid>
  );
};

export default LogItem;

export const useStyles = createStyles((theme) => ({
  root: {
    borderRadius: "10px",
    padding: 10,
    marginBottom: 5,
  },
}));

import LayoutBlock from "../../ui/LayoutBlock/LayoutBlock";
import { Box, Title, Grid } from "@mantine/core";
import { useSelector } from "../../hooks/mobxStoreHooks/useSelector";
import { observer } from "mobx-react";
import { useEffect } from "react";
import LogItem from "./components/LogItem";

const logs = [
  {
    id: 1,
    userName: "Ivan",
    fileName: "file1.txt",
    operation: "UPLOADED",
    date: "21.06.2023 16:34",
  },
  {
    id: 2,
    userName: "Ivan",
    fileName: "file1.txt",
    operation: "DOWNLOADED",
    date: "21.06.2023 16:35",
  },
  {
    id: 3,
    userName: "Ivan",
    fileName: "file1.txt",
    operation: "DELETED",
    date: "21.06.2023 16:35",
  },
];

const Logs = observer(() => {
  const logsStore = useSelector((store) => store.logsStore);
  const { getLogs } = logsStore;

  useEffect(() => {
    getLogs();
  }, []);

  return (
    <LayoutBlock>
      <Title order={3}>Логи</Title>
      <Grid mt={10} sx={{ padding: 10 }}>
        <Grid.Col md={1}>#</Grid.Col>
        <Grid.Col md={3}>Пользователь</Grid.Col>
        <Grid.Col md={3}>Имя файла</Grid.Col>
        <Grid.Col md={3}>Операция</Grid.Col>
        <Grid.Col md={2}>Дата</Grid.Col>
      </Grid>

      {logs.map((log) => (
        <LogItem
          id={log.id}
          fileName={log.fileName}
          userName={log.userName}
          date={log.date}
          operation={log.operation}
        />
      ))}
    </LayoutBlock>
  );
});

export default Logs;

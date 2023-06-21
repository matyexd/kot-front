import FileItem from "../components/FileItem";
import { Grid, Box, Title, Text } from "@mantine/core";
import { observer } from "mobx-react";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { useMemo } from "react";
import LayoutBlock from "../../../ui/LayoutBlock/LayoutBlock";

const MyFilesBlock = observer(() => {
  const filesStore = useSelector((store) => store.filesStore);
  const { items, getUsersDirById, dirHistory } = filesStore;

  console.log(dirHistory);

  const handleClickDir = (id) => {
    getUsersDirById(id);
  };

  const files = useMemo(
    () => items.filter((item) => item.type === "file"),
    [items]
  );
  const dirs = useMemo(
    () => items.filter((item) => item.type === "directory"),
    [items]
  );

  return (
    <Box>
      <Title order={5} mt={10}>
        Папки ({dirs.length})
      </Title>
      <LayoutBlock mt={10}>
        <Grid>
          {dirs.map((item, index) => (
            <Grid.Col md={3} xs={6} key={item.id + "dir"}>
              <FileItem
                isFile={false}
                name={item.name}
                onClick={() => handleClickDir(item.id)}
              />
            </Grid.Col>
          ))}
          {dirs.length === 0 && <Text ml={9}>Нет папок</Text>}
        </Grid>
      </LayoutBlock>

      <Title mt={20} order={5}>
        Файлы ({files.length})
      </Title>
      <LayoutBlock mt={10}>
        <Grid>
          {files.map((item, index) => (
            <Grid.Col md={3} xs={6} key={item.id + "file"}>
              <FileItem isFile={true} name={item.name} />
            </Grid.Col>
          ))}
          {files.length === 0 && <Text ml={9}>Нет файлов</Text>}
        </Grid>
      </LayoutBlock>
    </Box>
  );
});

export default MyFilesBlock;

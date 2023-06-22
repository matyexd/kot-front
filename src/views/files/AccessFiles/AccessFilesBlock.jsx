import { Grid, Text, Title } from "@mantine/core";
import LayoutBlock from "../../../ui/LayoutBlock/LayoutBlock";
import FileItem from "../components/FileItem";

const AccessFilesBlock = () => {
  return (
    <>
      <Title mt={20} order={5}>
        Файлы (1)
      </Title>
      <LayoutBlock mt={10}>
        <Grid>
          <Grid.Col md={3} xs={6}>
            <FileItem isFile={true} name={"file1.txt"} />
          </Grid.Col>
        </Grid>
      </LayoutBlock>
    </>
  );
};

export default AccessFilesBlock;

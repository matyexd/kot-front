import { observer } from "mobx-react";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { useEffect } from "react";
import AccessFilesBlock from "./AccessFilesBlock";
import { Title } from "@mantine/core";

const AccessFiles = observer(() => {
  const filesStore = useSelector((store) => store.filesStore);
  const { getAvailableFiles } = filesStore;

  useEffect(() => {
    getAvailableFiles();
  }, []);

  return (
    <>
      <Title order={3}>Доступные файлы</Title>
      <AccessFilesBlock />
    </>
  );
});

export default AccessFiles;

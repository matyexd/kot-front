import {
  Box,
  Title,
  Button,
  Modal,
  TextInput,
  Group,
  Text,
} from "@mantine/core";

import { observer } from "mobx-react";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { ChevronRight } from "tabler-icons-react";
import MyFilesBlock from "./MyFilesBlock";

const MyFiles = observer(() => {
  const filesStore = useSelector((store) => store.filesStore);
  const {
    getUsersDir,
    postCreateDir,
    parentDir,
    dirHistory,
    chooseInHistory,
    getUsersDirById,
  } = filesStore;
  const [opened, { open, close }] = useDisclosure(false);

  console.log(parentDir);

  const form = useForm({
    initialValues: {
      dirName: "",
    },

    validate: {
      dirName: (value) => (value.length > 0 ? null : "Введите название папки"),
    },
  });

  const handleCreateDir = (value, event) => {
    event.preventDefault();
    postCreateDir(value.dirName);
  };

  const handleChooseInHistory = async (id) => {
    await chooseInHistory(id);
    await getUsersDirById(id);
  };

  useEffect(() => {
    getUsersDir();
  }, []);

  return (
    <>
      <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          {dirHistory.map((dir, index) =>
            index === 0 ? (
              <Title
                order={3}
                key={dir.id}
                onClick={() =>
                  parentDir.id !== dir.id && handleChooseInHistory(dir.id)
                }
                sx={{ cursor: "pointer", marginBottom: 3 }}
              >
                Мои файлы
              </Title>
            ) : (
              <Box display={"flex"} sx={{ alignItems: "center" }} key={dir.id}>
                <ChevronRight height={15} />
                <Text
                  size={16}
                  key={dir.id}
                  onClick={() =>
                    parentDir.id !== dir.id && handleChooseInHistory(dir.id)
                  }
                  sx={{ cursor: "pointer" }}
                >
                  {dir.name}
                </Text>
              </Box>
            )
          )}
        </Box>
        <Button onClick={open}>Создать папку</Button>
      </Box>

      <MyFilesBlock />

      <Modal
        opened={opened}
        onClose={close}
        title={"Создать папку"}
        styles={() => ({ title: { fontWeight: 700 } })}
      >
        <form
          onSubmit={form.onSubmit((values, event) =>
            handleCreateDir(values, event)
          )}
        >
          <TextInput
            label={"Название папки"}
            {...form.getInputProps("dirName")}
            size="md"
          />
          <Group align={"center"}>
            <Button type="submit" mt={20} size="md">
              Создать
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
});

export default MyFiles;

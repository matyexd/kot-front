import {
  Box,
  Title,
  Button,
  Modal,
  TextInput,
  ThemeIcon,
  Group,
} from "@mantine/core";
import LayoutBlock from "../../../ui/LayoutBlock/LayoutBlock";
import { observer } from "mobx-react";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Mail } from "tabler-icons-react";

const MyFiles = observer(() => {
  const filesStore = useSelector((store) => store.filesStore);
  const { postGetUsersDir } = filesStore;
  const [opened, { open, close }] = useDisclosure(false);

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
  };

  useEffect(() => {
    postGetUsersDir();
  }, []);

  return (
    <>
      <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
        <Title order={3}>Мои файлы</Title>
        <Button onClick={open}>Создать папку</Button>
      </Box>
      <LayoutBlock mt={10}>123</LayoutBlock>
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

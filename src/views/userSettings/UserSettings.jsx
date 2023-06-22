import LayoutBlock from "../../ui/LayoutBlock/LayoutBlock";
import { Title, Radio, Group, Box, Switch } from "@mantine/core";

const UserSettings = () => {
  return (
    <LayoutBlock>
      <Title order={3}>Настройки пользователя</Title>
      <Box>
        <Title mt={20} order={6}>
          Кому видны мои файлы
        </Title>
        <Radio.Group mt={15} name="favoriteAccess" defaultValue={"user"}>
          <Group mt="xs">
            <Radio value="user" label="Только мне" />
            <Radio value="all" label="Всем пользователям" />
          </Group>
        </Radio.Group>
      </Box>
      <Box
        display={"flex"}
        sx={{ alignItems: "center", marginTop: 25, marginBottom: 20 }}
      >
        <Title order={6}>Уведомления</Title>
        <Switch size={"md"} ml={15} />
      </Box>
    </LayoutBlock>
  );
};

export default UserSettings;

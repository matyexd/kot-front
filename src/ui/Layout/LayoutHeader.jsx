import {
  Header,
  Group,
  Box,
  Text,
  ActionIcon,
  Menu,
  Button,
  Divider,
} from "@mantine/core";
import { Bell, Cloud, File, List, Logout, User } from "tabler-icons-react";

export function LayoutHeader() {
  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Cloud size={48} strokeWidth={2} color={"#228be6"} />
            <Text ml={10} size={"xl"} weight={500}>
              KotCloud
            </Text>
          </div>

          <Group>
            <ActionIcon radius="xl" size={28}>
              <Bell />
            </ActionIcon>

            <Menu width={250} shadow="md">
              <Menu.Target>
                <Button color={"blue"} variant="outline">
                  Профиль
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<User size={20} />}>
                  <Text pt={3}>Настройки пользователя</Text>
                </Menu.Item>
                <Menu.Item icon={<List size={20} />}>
                  <Text pt={3}>Логи</Text>
                </Menu.Item>
                <Menu.Item icon={<File size={20} />}>
                  <Text pt={3}>Файлы</Text>
                </Menu.Item>
                <Divider my="sm" style={{ marginTop: 5, marginBottom: 0 }} />
                <Menu.Item icon={<Logout size={20} color={"red"} />}>
                  <Text pt={3}>Выход</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Header>
    </Box>
  );
}

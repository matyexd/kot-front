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
import { useSelector } from "../../hooks/mobxStoreHooks/useSelector";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { AppPath } from "../../routes/routes-enums";

export const LayoutHeader = observer(() => {
  const authStore = useSelector((store) => store.authStore);
  const { logout } = authStore;
  const history = useHistory();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box>
      <Header height={60} px={35}>
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
                <Menu.Item
                  icon={<File size={20} />}
                  onClick={() => history.push(AppPath.files)}
                >
                  <Text pt={3}>Мои файлы</Text>
                </Menu.Item>
                <Menu.Item icon={<File size={20} />}>
                  <Text pt={3}>Доступные файлы</Text>
                </Menu.Item>
                <Divider my="sm" style={{ marginTop: 5, marginBottom: 0 }} />
                <Menu.Item
                  onClick={() => handleLogout()}
                  icon={<Logout size={20} color={"red"} />}
                >
                  <Text pt={3}>Выход</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Header>
    </Box>
  );
});

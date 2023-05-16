import { PasswordInput, TextInput, ThemeIcon, Button } from "@mantine/core";
import { Link, useHistory } from "react-router-dom";
import { Mail } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import { AppPath } from "../../../routes/routes-enums";

const LoginForm = () => {
  const history = useHistory();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: {
      email: (value) =>
        value.length > 0 ? null : "Email не должен быть пустым",
      password: (value) =>
        value.length > 0 ? null : "Пароль не должен быть пустым",
    },
  });

  const handleLogin = async (values, event) => {
    event.preventDefault();
    history.push(AppPath.main);
  };

  return (
    <form
      onSubmit={form.onSubmit((values, event) => handleLogin(values, event))}
    >
      <TextInput
        label={"Email"}
        {...form.getInputProps("email")}
        size="md"
        rightSection={
          <ThemeIcon
            variant="light"
            size={"sm"}
            style={{ backgroundColor: "transparent", color: "#495057" }}
          >
            <Mail />
          </ThemeIcon>
        }
        mt={15}
      />

      <PasswordInput
        mt={12}
        label={"Пароль"}
        {...form.getInputProps("password")}
        size="md"
      />

      <Button type="submit" fullWidth mt={20} size="md">
        Войти
      </Button>

      <Button
        component={Link}
        to={AppPath.signUp}
        variant="default"
        fullWidth
        mt={20}
        size="md"
      >
        Еще не зарегистрированы?
      </Button>
    </form>
  );
};
export default LoginForm;

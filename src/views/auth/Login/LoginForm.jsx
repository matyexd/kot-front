import {
  PasswordInput,
  TextInput,
  ThemeIcon,
  Button,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Mail } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import { AppPath } from "../../../routes/routes-enums";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { observer } from "mobx-react";

const LoginForm = observer(() => {
  const authStore = useSelector((store) => store.authStore);
  const { postLogin, inProcess, errors, setErrors } = authStore;

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
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
    postLogin({ email: values.email, password: values.password });
  };

  return (
    <form
      onSubmit={form.onSubmit((values, event) => handleLogin(values, event))}
      onFocus={() => setErrors()}
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

      <Button type="submit" fullWidth mt={20} size="md" loading={inProcess}>
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
      {errors.length > 0 && (
        <Text mt={20} color={"red"}>
          {errors}
        </Text>
      )}
    </form>
  );
});
export default LoginForm;

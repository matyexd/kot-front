import {
  PasswordInput,
  TextInput,
  ThemeIcon,
  Button,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Mail, User } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import { AppPath } from "../../../routes/routes-enums";
import { observer } from "mobx-react";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";

const RegistrationForm = observer(() => {
  const authStore = useSelector((store) => store.authStore);
  const { postRegister, inProcess, errors, setErrors } = authStore;

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      username: "",
    },

    validate: {
      email: (value) =>
        value.length > 0 ? null : "Email не должен быть пустым",
      password: (value) =>
        value.length > 0 ? null : "Пароль не должен быть пустым",
      username: (value) =>
        value.length > 0 ? null : "Имя пользователя не должно быть пустым",
    },
  });

  const handleReg = async (values, event) => {
    event.preventDefault();
    postRegister({
      username: values.username,
      email: values.email,
      password: values.password,
      repeatPassword: values.repeatPassword,
    });
  };

  return (
    <form
      onSubmit={form.onSubmit((values, event) => handleReg(values, event))}
      onFocus={() => setErrors()}
    >
      <TextInput
        label={"Имя пользователя"}
        {...form.getInputProps("username")}
        size="md"
        rightSection={
          <ThemeIcon
            variant="light"
            size={"sm"}
            style={{ backgroundColor: "transparent", color: "#495057" }}
          >
            <User />
          </ThemeIcon>
        }
        mt={15}
      />

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

      <PasswordInput
        mt={12}
        label={"Повторите пароль"}
        {...form.getInputProps("repeatPassword")}
        size="md"
      />

      <Button type="submit" fullWidth mt={20} size="md" loading={inProcess}>
        Зарегистрироваться
      </Button>

      <Button
        component={Link}
        to={AppPath.signIn}
        variant="default"
        fullWidth
        mt={20}
        size="md"
      >
        Назад к входу
      </Button>

      {errors.length > 0 && (
        <Text mt={20} color={"red"}>
          {errors}
        </Text>
      )}
    </form>
  );
});
export default RegistrationForm;

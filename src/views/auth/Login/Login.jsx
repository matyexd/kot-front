import { Box, Grid, Text } from "@mantine/core";
import { useStyles } from "./styles";
import LayoutPublic from "../../../ui/LayoutPublic/LayoutPublic";
import { Cloud } from "tabler-icons-react";
import LoginForm from "./LoginForm";

export const Login = () => {
  const { classes } = useStyles();

  return (
    <LayoutPublic padding={0}>
      <Grid gutter={0} mih="100%">
        <Grid.Col span={6} className={classes.formCol}>
          <Box w="100%" maw={500} mx="auto">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cloud size={150} strokeWidth={2} color={"#228be6"} />
              <Text ml={10} size={50} weight={500}>
                KotCloud
              </Text>
            </div>
          </Box>
        </Grid.Col>
        <Grid.Col span={6} className={classes.formCol}>
          <Box w="100%" maw={500} mx="auto">
            <LoginForm />
          </Box>
        </Grid.Col>
      </Grid>
    </LayoutPublic>
  );
};

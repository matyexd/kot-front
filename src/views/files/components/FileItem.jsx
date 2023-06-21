import { Box, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { Folder, File } from "tabler-icons-react";

const FileItem = ({ isFile, name, onClick }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} onClick={onClick}>
      {isFile ? (
        <File className={classes.itemIcon} />
      ) : (
        <Folder className={classes.itemIcon} />
      )}
      <Text className={classes.itemText}>{name}</Text>
    </Box>
  );
};

export default FileItem;

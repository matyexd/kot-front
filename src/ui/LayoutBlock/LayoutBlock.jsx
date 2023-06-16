import { Box } from "@mantine/core";

const LayoutBlock = ({ children, ...mantineStyle }) => {
  return (
    <Box
      sx={{ backgroundColor: "#FFFFFF", borderRadius: "10px", padding: 15 }}
      {...mantineStyle}
    >
      {children}
    </Box>
  );
};

export default LayoutBlock;

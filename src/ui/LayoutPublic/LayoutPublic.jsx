import { AppShell } from "@mantine/core";

const LayoutPublic = ({ children, padding = 16 }) => {
  return (
    <AppShell footer={<></>} padding={padding}>
      {children}
    </AppShell>
  );
};

export default LayoutPublic;

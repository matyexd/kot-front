import { LayoutHeader } from "./LayoutHeader";
import React from "react";
import { Loader, Box, AppShell, Container } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <>
      <AppShell
        header={<LayoutHeader />}
        padding={10}
        styles={() => ({ main: { backgroundColor: "#f8f8f8" } })}
      >
        <Container fluid={true}>
          <React.Suspense fallback={<Loader />}>{children}</React.Suspense>
        </Container>
      </AppShell>
      {/*<LayoutHeader />*/}
      {/*<Box sx={{ backgroundColor: "#f8f8f8" }}>*/}
      {/*  <React.Suspense fallback={<Loader />}>{children}</React.Suspense>*/}
      {/*</Box>*/}
    </>
  );
};

export default Layout;

import { LayoutHeader } from "./LayoutHeader";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
};

export default Layout;

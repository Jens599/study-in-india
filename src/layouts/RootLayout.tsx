import { Outlet } from "react-router-dom";
import { Header, Footer, TopBanner } from "../components";

const RootLayout = () => {
  const color = window.location.pathname === "/home" ? "blue" : "green";

  return (
    <>
      <TopBanner color={color} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import { Header, Footer, TopBanner } from "../components";

const RootLayout = () => {
  

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

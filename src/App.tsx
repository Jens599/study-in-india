import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { ContactUs, Home, NotFound, Scholarship, WhyUs } from "./pages";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/scholarship" element={<Scholarship />} />
      </Route>
      <Route path="*" element={<NotFound />} />,
    </Route>,
  ),
);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;

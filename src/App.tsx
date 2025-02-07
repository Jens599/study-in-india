import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { ContactUs, Home } from "./pages";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;

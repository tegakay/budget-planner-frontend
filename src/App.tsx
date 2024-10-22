import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LayoutComp from "./components/LayoutComp";
import Settings from "./pages/Settings";
import Budget from "./pages/Budget";
import Plan from "./pages/Plan";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="Dashboard" element={<LayoutComp />} >
      <Route index element={<Dashboard />} />
      <Route path="settings" element={<Settings/>} />
      <Route path="budget" element={<Budget/>} />
      <Route path="plan" element={<Plan/>} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import HomePage from "./pages/homepage";
import { RouterProvider } from 'react-router'
import LoginPage from "./pages/LoginPage";
import { router } from "../router";

function App() {
  //
  return (
    <>
      <RouterProvider router={router} />
      {/* <Login /> */}
    </>
  );
}

export default App;

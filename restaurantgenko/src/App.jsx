import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./pages/BaseLayout";
import HomePage from "./pages/HomePage";
import LoginPageAdmin from "./pages/LoginPageAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users/login" element={<LoginPageAdmin />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

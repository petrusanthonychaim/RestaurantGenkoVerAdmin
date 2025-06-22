import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./pages/BaseLayout";
import HomePage from "./pages/HomePage";
import AddCuisine from "./pages/AddCuisine";
import LoginPageAdmin from "./pages/LoginPageAdmin";
import EditCuisine from "./pages/EditCuisine";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users/register" element={<RegisterPage />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cuisine/addForm" element={<AddCuisine />} />
            <Route path="/cuisine/show/:id" element={<EditCuisine />} />
            <Route path="/cuisine/delete/:id" element={<AddCuisine />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

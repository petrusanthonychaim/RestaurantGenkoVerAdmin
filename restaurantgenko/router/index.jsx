import { createBrowserRouter, redirect } from "react-router";
import HomePage from "../src/pages/homepage";
import RootLayout from "../layouts/RootLayout";
import TableContent from "../src/components/TableContent";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        //child in the table content, how to access parent
        path: "/",
        element: <TableContent/>,
      },
    ],
  },

  // {
  //   path: "/users/login",
  //   element: <LoginPage />, //login page fill with only 2 input data form (email, password)
  // },
  // {
  //   path: "/users/register",
  //   element: <RegisterPage />, //register page fill with 6 input data (username,email,password,role,phoneNumber,address)
  // },
  // {
  //   //child in the table content, how to access parent , SHOW ALL CUISINES (IMAGE, MANY TEXT (MANY DETAIL))
  //   path: "/cuisine/all,`
  //   element: <RegisterPage />,
  // },
  // {
  //   //child in the table content, how to access parent
  //   path: "/cuisine/addForm",
  //   element: <RegisterPage />,
  // },
  // {
  //   //child in the table content, how to access parent // EDIT CUSINE BY NAME (EDIT , DELTE)
  //   path: "/cuisine/show/:cuisineId",
  //   element: <RegisterPage />,
  // },
  // {
  //   //child in the table content, how to access parent // EDIT CUSINE BY NAME (EDIT , DELTE)
  //   path: "/cuisine/delete/:cuisineId",
  //   element: <RegisterPage />,
  // },
  // {
  //   //child in the table content, how to access parent
  //   path: "/categories/all",
  //   element: <RegisterPage />,
  // },
  // {
  //   //child in the table content, how to access parent
  //   path: "/categories/addForm",
  //   element: <RegisterPage />,
  // },
  // {
  //   //child in the table content, how to access parent
  //   path: "/categories/show/:categoryId",
  //   element: <RegisterPage />,
  // },
]);

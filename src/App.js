import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import { loadProductsAndCart } from "./loaders/loadProductsAndCart";
import Login from "./components/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: loadProductsAndCart,
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          loader: loadProductsAndCart,
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: loadProductsAndCart,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
    {
      path: "/about",
      element: <About></About>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import Photos from "./components/pages/Photos";
import Faq from "./components/pages/Faq";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div
      className="App"
      css={css`
        font-family: "Sawarabi Mincho", serif;
        font-weight: 400;
        font-style: normal;
      `}
    >
      <div
        className="hero-container"
        css={css`
          min-height: 100vh;
          height: ${pathname === "/" ? "100vh" : "100%"};
          display: flex;
          flex-direction: column;
        `}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/story",
          element: <Story />,
        },
        {
          path: "/photos",
          element: <Photos />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

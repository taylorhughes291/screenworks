/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import Photos from "./components/pages/Photos";
import Faq from "./components/pages/Faq";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { backgroundColor } from "./themes";

const AppLayout = () => {
  useEffect(() => {
    // Set the background style on the body tag
    document.body.style.backgroundColor = backgroundColor;

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div
      className="App"
      css={css`
        font-family: "Raleway", serif;
        font-weight: 400;
        font-style: normal;
      `}
    >
      <div
        className="outlet-container"
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        `}
      >
        <Header />
        <Outlet />
      </div>
      <Footer />
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

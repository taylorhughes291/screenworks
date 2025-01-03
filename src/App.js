/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Story from "./components/pages/Story";
import Photos from "./components/pages/Photos";
import Faq from "./components/pages/Faq";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import * as contentful from "contentful";

const AppLayout = () => {
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
          height: 100vh;
          display: flex;
          flex-direction: column;
        `}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  let client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_KEY,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_TOKEN,
  });
  client
    .getEntries()
    .then((entry) => console.log(entry))
    .catch((err) => console.log(err));
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

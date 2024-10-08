/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Header from './components/Header';
import Home from './components/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])
  return (
    <div className="App" css={css`
      font-family: "Sawarabi Mincho", serif;
      font-weight: 400;
      font-style: normal;
    `}>
      <div className="hero-container" css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
      `}>
        <Header></Header>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

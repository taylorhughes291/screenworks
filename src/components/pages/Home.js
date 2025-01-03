/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hero from "../Hero";

const Home = () => {
  return (
    <Hero
      overrideStyles={css`
        flex: 1;
      `}
    ></Hero>
  );
};

export default Home;

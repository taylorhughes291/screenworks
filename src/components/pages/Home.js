/** @jsxImportSource @emotion/react */
import Hero from "../Hero"
import { css } from "@emotion/react"

const Home = () => {
    return (
        <Hero overrideStyles={css`
          flex: 1;
        `}></Hero>
    )
}

export default Home;

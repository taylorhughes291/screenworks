/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App" css={css`
    `}>
      <div className="hero-container" css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
      `}>
        <Header></Header>
        <Hero overrideStyles={css`
          flex: 1;
        `}></Hero>
      </div>
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Header from './components/Header';

function App() {
  return (
    <div className="App" css={css`
      padding: 5px 10px;
    `}>
      <Header></Header>
    </div>
  );
}

export default App;

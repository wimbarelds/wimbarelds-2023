import { type JSXElement } from 'solid-js';
import { css } from 'solid-styled';
import Navigation from '../Nav/Nav';

export default function Header(): JSXElement {
  css`
    section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
    }
    h1 {
      text-align: center;
      line-height: 64px;
      font-size: 0;
      color: transparent;
      border: solid var(--clr-p-400) 2px;
      border-radius: 10%;
      width: 64px;
      height: 64px;
      background-color: rgba(255, 255, 255, .1);
    }
    h1::first-letter {
      font-size: 48px;
      color: #FFF;
    }
  `;
  return (
    <section>
      <header>
        <h1>Wim Barelds</h1>
      </header>

      <Navigation />
    </section>
  );
}

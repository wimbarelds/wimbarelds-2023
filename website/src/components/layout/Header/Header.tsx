import { type JSXElement } from 'solid-js';
import Navigation from '../Nav/Nav';

export default function Header(): JSXElement {
  return (
    <section>
      <header>
        <h1>Wim Barelds</h1>
        <p>... Who's that guy anyway?</p>
      </header>

      <Navigation />
    </section>
  );
}

import { type JSXElement } from 'solid-js';
import { A } from 'solid-start';

export default function Navigation(): JSXElement {
  // These links should come from Sanity CMS
  return (
    <nav aria-labelledby="mainmenulabel">
      <h2 id="mainmenulabel" class="sr-only">
        Main Menu
      </h2>
      <ul class={`no-list`}>
        <li>
          <A activeClass='active' end={true} href="/">
            Who am I?
          </A>
        </li>
        <li>
          <A activeClass='active' href="/articles">
            Articles
          </A>
        </li>
        <li>
          <A activeClass='active' href="/pens">
            Pens
          </A>
        </li>
        <li>
          <A activeClass='active' href="/home">
            Home
          </A>
        </li>
      </ul>
    </nav>
  );
}

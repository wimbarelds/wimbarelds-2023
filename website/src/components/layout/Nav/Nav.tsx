import { type JSXElement } from 'solid-js';
import { A } from 'solid-start';
import { css } from 'solid-styled';

export default function Navigation(): JSXElement {
  // These links should come from Sanity CMS
  css`
    nav {
      display: flex;
      align-items: center;
    }
    ul {
      display: flex;
      gap: 1em;
    }
    a {
      padding: .25em .5em;
      color: var(--clr-p-50);
      text-decoration: none;
      border: solid transparent 2px;
      transition: all .25s ease-in-out;
      border-radius: .5em;
    }
    a.active {
      text-decoration: underline;
    }
    a:hover {
      color: #FFF;
      text-decoration: none;
      border-color: var(--clr-p-200);
      filter: saturate(.3);
      background-color: var(--clr-black);
    }
  `
  return (
    <nav aria-labelledby="mainmenulabel">
      <h2 id="mainmenulabel" class="sr-only">
        Main Menu
      </h2>
      <ul class={`no-list`}>
        <li>
          <A activeClass="active" end={true} href="/" use:solid-styled>
            Who am I?
          </A>
        </li>
        <li>
          <A activeClass="active" href="/articles" use:solid-styled>
            Articles
          </A>
        </li>
        <li>
          <A activeClass="active" href="/pens" use:solid-styled>
            Pens
          </A>
        </li>
        <li>
          <A activeClass="active" href="/home" use:solid-styled>
            Home
          </A>
        </li>
      </ul>
    </nav>
  );
}

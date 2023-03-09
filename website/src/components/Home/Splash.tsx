import { toHTML } from '@portabletext/to-html';
import { For } from 'solid-js';
import { css } from 'solid-styled';
import { HeadingModule, ListModule, PageSection, PortableTextModule } from '~/sanity/query/home';

const parseSection = (section: PageSection) => {
  const prefix = section.section_title;
  const name = section.section_modules.find(
    (module) => module._type === 'heading' && module.level === 2,
  ) as HeadingModule;
  const heading = section.section_modules.find(
    (module) => module._type === 'heading' && module.level === 3,
  ) as HeadingModule;
  const scroller = section.section_modules.find((module) => module._type === 'list') as ListModule;
  const body = section.section_modules.find(
    (module) => module._type === 'module_richtext',
  ) as PortableTextModule;

  return { prefix, name, heading, scroller, body: <div innerHTML={toHTML(body.blocks)} /> };
};

export function Splash(props: { section: PageSection }) {
  const { prefix, name, heading, scroller, body } = parseSection(props.section);

  css`
    .splash {
      max-width: 600px;
    }
    .prefix {
      color: var(--clr-mono-300);
    }
    h2, h3 {
      line-height: 1.05em;
    }
    h2 {
      font-size: 64px;
      color: var(--clr-mono-500);
    }
    h2 span:first-child {
      color: #ccc;
    }
    h3 {
      display: flex;
      align-items: flex-end;
      color: var(--clr-p-300);
      font-size: 40px;
    }
    .body {
      margin: 1em 0;
      max-width: 24em;
      color: var(--clr-p-100);
    }
    h3 ul {
      position: relative;
      display: grid;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: hidden;
      margin-left: .25em;
    }
    h3 li {
      grid-column: 1;
      grid-row: 1;
      animation: slide 10s calc(var(--i) * -2.5s) infinite ease-in-out;
      color: var(--clr-a-200);
      font-weight: 700;
      text-transform: lowercase;
      text-decoration: underline;
    }
    h3:hover li {
      animation-play-state: paused;
    }
    @keyframes slide {
      0% {
        transform: translateX(-100%);
      }
      3% {
        transform: translateX(0%);
      }
      25% {
        transform: translateX(0%);
      }
      28% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;

  return (
    <div class="splash">
      <p class="prefix">{prefix}</p>
      <h2>
        {name.text.split(' ').map((part) => (
          <span>{part}</span>
        ))}
      </h2>
      <h3>
        {heading.text}
        <ul>
          <For each={scroller.items}>
            {(item, index) => <li style={{ '--i': index() }}>{item}</li>}
          </For>
        </ul>
      </h3>
      <div class="body">{body}</div>
    </div>
  );
}

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
    .splash > p {
      color: #f90;
    }
    h2 {
      font-size: 64px;
      color: #999;
    }
    h2 span:first-child {
      color: #ccc;
    }
    h3 {
      display: flex;
      color: #f90;
    }
    h3 ul {
      position: relative;
      display: grid;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
    h3 li {
      grid-column: 1;
      grid-row: 1;
      animation: slide 10s calc(var(--i) * -2.5s) infinite ease-in-out;
      color: #ff0;
    }
    h3:hover li {
      animation-play-state: paused;
    }
    h3 li::before {
      content: '\\00a0';
    }
    @keyframes slide {
      0% {
        transform: translateY(-100%);
      }
      3% {
        transform: translateY(0%);
      }
      25% {
        transform: translateY(0%);
      }
      28% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(100%);
      }
    }
  `;

  return (
    <div class="splash">
      <p>{prefix}</p>
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

import { type JSXElement } from "solid-js";
import { A } from "solid-start";
import styles from './nav.module.scss'

export default function Navigation(): JSXElement {
  // These links should come from Sanity CMS
  return (
    <nav aria-labelledby="mainmenulabel" class={styles.nav}>
	    <h2 id="mainmenulabel" class="sr-only">Main Menu</h2>
      <ul class={`no-list ${styles.links}`}>
        <li><A activeClass={styles.active} href="/">Who am I?</A></li>
        <li><A activeClass={styles.active} href="/tech">Tech</A></li>
        <li><A activeClass={styles.active} href="/posts">Posts</A></li>
      </ul>      
    </nav>
  )
}
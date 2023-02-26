import { type JSXElement } from "solid-js";
import { A } from "solid-start";
import styles from './nav.module.scss'

export default function Navigation(): JSXElement {
  // These links should come from Sanity CMS
  return (
    <nav aria-labelledby="mainmenulabel" class={styles.nav}>
	    <h2 id="mainmenulabel" class="sr-only">Main Menu</h2>
      <ul class={`no-list ${styles.links}`}>
        <li><A activeClass={styles.active} end={true} href="/">Who am I?</A></li>
        <li><A activeClass={styles.active} href="/articles">Articles</A></li>
        <li><A activeClass={styles.active} href="/pens">Pens</A></li>
        <li><A activeClass={styles.active} href="/home">Home</A></li>
      </ul>      
    </nav>
  )
}
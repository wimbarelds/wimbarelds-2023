import { type JSXElement } from "solid-js";
import Navigation from "../Nav/Nav";
import styles from './header.module.scss';

export default function Header(): JSXElement {
  return (
    <section class={styles.header}>
      <header>
        <h1>Wim Barelds</h1>
        <p role="doc-subtitle">... Who's that guy anyway?</p>
      </header>
      
      <Navigation />
    </section>
  )
}
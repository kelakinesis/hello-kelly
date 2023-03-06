import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/" target="_self">
          <Logo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/" target="_self">
            Home
          </a>
        </li>
        <li>
          <a href="/projects" target="_self">
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/work-with-kelly/"
            target="_blank"
          >
            LinkedIn ↗︎
          </a>
        </li>
      </ul>
    </header>
  );
});

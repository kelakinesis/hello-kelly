import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div>
        <p>Made with ♡ and ☕️</p>
        {" | "}
        <a href="https://www.linkedin.com/in/work-with-kelly/" target="_blank">
          Let's work together ↗︎
        </a>
      </div>
    </footer>
  );
});

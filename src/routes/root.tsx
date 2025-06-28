import { JSX } from "solid-js";

export default function Root(props: { children: JSX.Element }) {
  return (
    <>
      <main>
        {props.children}
      </main>
    </>
  );
}
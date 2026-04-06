import { JSX } from "solid-js";
import Navbar from "~/components/layout/Navbar";

export default function RootLayout(props: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  );
}
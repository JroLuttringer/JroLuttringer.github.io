import { JSX } from "solid-js";
import Navbar from "~/components/layout/Navbar";

export default function RootLayout(props: { children: JSX.Element }) {
  return (
    <>
    TEST
      <Navbar />
      <main>
       TEST 
        {props.children}
      </main>
    </>
  );
}
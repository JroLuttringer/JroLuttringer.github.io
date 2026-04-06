import type { ParentProps } from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Navbar from "~/components/layout/Navbar";
import "./app.css";

const Layout = (props: ParentProps) => {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  );
};

export default function App() {
  return (
    <MetaProvider>
      <Title>Jean-Romain Luttringer | Academic Portfolio</Title>
      <Router root={Layout}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}

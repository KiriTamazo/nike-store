import React from "react";
import {
  Cart,
  FlexContent,
  Footer,
  Home,
  Navbar,
  Sales,
  Stories,
} from "./components";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  toprateslaes,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Home heroapi={heroapi} />
        <Sales endpoint={popularsales} wide />
        <FlexContent endpoint={highlight} reverse />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;

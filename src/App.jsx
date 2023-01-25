import React, { useEffect, useState } from "react";
import {
  Cart,
  FlexContent,
  Footer,
  Home,
  Navbar,
  Sales,
  Stories,
} from "./components";
import Sidebar from "./components/Sidebar";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  toprateslaes,
} from "./data/data";
import useMediaQuery from "./hooks/useMediaQuery";
import ScrollToTop from "./mini-components/ScrollToTop";

const App = () => {
  const [sticky, setSticky] = useState(false);

  const matches = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <Navbar sticky={sticky} matches={matches} open={open} setOpen={setOpen} />
      {matches && <Sidebar open={open} setOpen={setOpen} />}
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Home heroapi={heroapi} />
        <Sales id="popularSale" endpoint={popularsales} wide>
          <FlexContent endpoint={highlight} reverse />
        </Sales>
        <Sales id="topRatedSale" endpoint={toprateslaes}>
          <FlexContent endpoint={sneaker} />
        </Sales>
        <Stories id="topStories" story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
      <ScrollToTop sticky={sticky} />
    </>
  );
};

export default App;

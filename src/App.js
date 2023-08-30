import Header from "./Header.js";
import { SideNav } from "./Nav.js";
import { NavBar } from "./Nav.js";
import Recents from "./Recents.js";
import Music from "./Music.js";
import Podcast from "./Podcast.js";
import Footer from "./Footer.js";
import Record from "./Record.js";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <SideNav />
      <Recents />
      <Music />
      <Podcast />
      <Record />
      <Footer />
    </>
  );
}
export default App;

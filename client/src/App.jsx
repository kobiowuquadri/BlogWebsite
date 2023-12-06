import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
function App() {
  return (
    <>
      <Header />
      <div className="md:px-32 px-4 grid-rows-[auto_1fr_auto]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

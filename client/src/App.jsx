import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;

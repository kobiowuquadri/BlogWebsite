import { Outlet } from "react-router-dom";

import Header from "./components/header/header";
function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

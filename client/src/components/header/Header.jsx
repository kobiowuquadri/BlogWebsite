import { useState } from "react";
import Menu from "../menu/Menu";

import SmallMenu from "../smallMenu/SmallMenu";
import { FaBars } from "react-icons/fa";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="md:px-32 px-4 bg-white text-black py-5 flex justify-between items-center shadow-lg mb-5 ">
      <div className="tracking-widest font-bold text-2xl">Blogify</div>
      <Menu />
      <SmallMenu show={show} />
      <FaBars
        className="block md:hidden text-2xl cursor-pointer"
        onClick={() => setShow(!show)}
      />
    </div>
  );
}

export default Header;

import { useEffect, useRef, useState } from "react";

function Typing(testTyping) {
  const [position, setPosition] = useState(0);
  const currentPosition = useRef(0);

  useEffect(() => {
    const timer = setInterval(function () {
      setPosition((pos) => pos + 1);
      console.log("interver");
      currentPosition.current += 1;
      if (currentPosition.current > testTyping.length) {
        clearInterval(timer);
      }
    }, 200);
    return () => {
      clearInterval(timer);
      setPosition(0);
      currentPosition.current = 0;
    };
  }, [testTyping]);
  return testTyping.substring(0, position);
}

export default Typing;

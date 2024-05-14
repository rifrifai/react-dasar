import { useState } from "react";

function Button() {
  // counter adl var, setcounter adl fungsi utk merubah var counter sedangkan usestate 0 adl nilai awal
  const [counter, setCounter] = useState(0);

  let newCounter = 0;
  function clickHandler() {
    newCounter = counter + 1;
    console.info(`Saya diKlik ${newCounter} kali`);
    setCounter(newCounter);
  }

  return (
    <div>
      {/* tanda () akan lngsung dirender oleh reactjs */}
      <button onClick={clickHandler}>I'm clicked {counter} times 🔼</button>
    </div>
  );
}

export default Button;

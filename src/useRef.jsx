import { useRef } from "react";

function App() {
  const message = useRef(null);
  const displayMessage = useRef(null);

  function clickHandler() {
    console.info(message.current.value);
    displayMessage.current.innerHTML = message.current.value;

    // styling
    displayMessage.current.style.padding = "5px";
    displayMessage.current.style.marginTop = "5px";
    displayMessage.current.style.backgroundColor = "#333";
    displayMessage.current.style.color = "#eee";
  }
  return (
    <>
      <div>
        <input type="text" ref={message} placeholder="Send Your Message" />
      </div>
      <div>
        <button onClick={clickHandler}>Click Me! 👆</button>
      </div>
      <div ref={displayMessage}></div>
    </>
  );
}

export default App;

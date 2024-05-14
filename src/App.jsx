import { useContext, createContext, useState } from "react";

function Child1() {
  const data = useContext(context);
  return (
    <>
      <div>Child 1: {data.nama}</div>
      <Child2 />
    </>
  );
}

function Child2() {
  const data = useContext(context);
  return (
    <>
      <div>Child 2: {data.nama}</div>
      <Child3 />
    </>
  );
}

function Child3() {
  const data = useContext(context);
  function clickHandler() {
    if (data.nama == "Tyas Diah") {
      data.setNama("Rifai Junior");
    } else {
      data.setNama("Tyas Diah");
    }
  }

  return (
    <>
      Hi {data.nama} and your age is {data.umur}, by Child3
      <button onClick={clickHandler}>change name :</button>
    </>
  );
}

const context = createContext();
function App() {
  const [nama, setNama] = useState("Tyas Diah");
  return (
    <>
      <context.Provider value={{ nama, setNama, umur: 23 }}>
        <Child1 name="Tyas" />
      </context.Provider>
    </>
  );
}

export default App;

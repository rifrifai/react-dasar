// import MenuResto from "./MenuResto.jsx";
// import Header from "./Header.jsx";
// import Mood from "./Mood";
// import Button from "./Button";
// import Tombol from "./Tombol";

import { useState, useMemo, useCallback } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [subsCounter, setSubsCounter] = useState(0);
  const [name, setName] = useState("Rif Technology");

  // useCallback(fungsi(), [dependecies])
  const handlerName = useCallback(() => {
    let compName = "";
    if (name == "Rif Technology") {
      compName = "Tyas Tech";
    } else {
      compName = "Rif Technology";
    }
    setName(compName);
    console.info(`set name run ${name}`);
  }, [name]);

  // function pesanLike() {
  //   console.info(`Pesan Like Rendered`);
  //   return likeCounter < 10 ? "Like < 10" : "Like Banyak";
  // }

  // const displayPesanLike = pesanLike();
  // const displayPesanLike = useMemo(() => pesanLike(), [likeCounter]);
  return (
    <>
      <p>
        <button onClick={() => setLikeCounter(likeCounter + 1)}>
          {likeCounter} Like : 👍
        </button>{" "}
        {/* {displayPesanLike} */}
      </p>
      <p>
        <button onClick={() => setSubsCounter(subsCounter + 1)}>
          {subsCounter} Subscribe 📽️
        </button>
      </p>

      <ChildComponent name={name} aksi={handlerName} />
      {/* <button onClick={handlerName}>Change Company</button> */}

      {/* <Tombol /> */}
      {/* <Button /> */}
      {/* <Mood hari="Senin" mood="😔" />
      <Mood hari="Selasa" mood="😂" />
      <Mood hari="Rabu" mood="😘" />
      <Mood hari="Kamis" mood="🤣" />
      <Mood hari="Jumat" mood="😵" /> */}
      {/* <Header />
      <MenuResto /> */}
    </>
  );
}

export default App;

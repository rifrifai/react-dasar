import { useEffect, useState } from "react";

function Tombol() {
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);
  useEffect(() => {
    console.info(`Josh, Like ${countLike} | Dislike ${countDisLike}`);
  }, [countLike]);
  // hanya [countlike] yang ditampilkan di console log

  return (
    <>
      <button onClick={() => setCountLike(countLike + 1)}>
        {countLike} Like : 👍
      </button>
      <button onClick={() => setCountDisLike(countDisLike + 1)}>
        {countDisLike} Dislike : 👎
      </button>
    </>
  );
}
export default Tombol;

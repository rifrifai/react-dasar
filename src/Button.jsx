function Button() {
  function clickHandler(nama) {
    console.info(`Saya diKlik ${nama}`);
  }

  return (
    <div>
      {/* tanda () akan lngsung dirender oleh reactjs */}
      <button onClick={() => clickHandler("Tyas")}>Click Me! 🔘</button>
    </div>
  );
}

export default Button;

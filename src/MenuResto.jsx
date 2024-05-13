// import "./MenuResto.css";

function MenuResto() {
  const styleMenuItem = {
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
  };

  const isMakanan = true;

  return (
    <div style={styleMenuItem}>
      <div>
        <b> Nama Menu : </b>
        <em> Nasi Bakar 🍘</em>
      </div>

      {isMakanan == true && <div>Tipe : Makanan</div>}
    </div>
  );
}

export default MenuResto;

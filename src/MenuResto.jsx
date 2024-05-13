// import "./MenuResto.css";

function MenuResto() {
  const styleMenuItem = {
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
  };
  return (
    <div style={styleMenuItem}>
      <div>
        <b> Nama Menu : </b>
        <em> Nasi Bakar 🍘</em>
      </div>
      <div>
        <b> Harga : </b>
        <em> Rp. 20.000</em>
      </div>
    </div>
  );
}

export default MenuResto;

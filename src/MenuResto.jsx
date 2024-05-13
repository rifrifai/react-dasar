// import "./MenuResto.css";

function MenuResto() {
  const styleMenuItem = {
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
    marginBottom: "5px",
  };

  // const isMakanan = true;
  const menu = [
    { nama: "Nasi Bakar 🍘", harga: "Rp.30.000" },
    { nama: "Mie Ayam 🍜", harga: "Rp. 25.000" },
    { nama: "Ayam Goreng 🍗", harga: "Rp. 50.000" },
  ];

  return (
    <>
      {menu.map((item, index) => {
        return (
          <div style={styleMenuItem} key={index}>
            <div>
              <b> {item.nama} </b>
              <em> {item.harga}</em>
            </div>
          </div>
        );
      })}
    </>

    // {/* {isMakanan == true && <div>Tipe : Makanan</div>} */}
  );
}

export default MenuResto;

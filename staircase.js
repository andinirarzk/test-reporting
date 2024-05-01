function staircase(n, tipe1, tipe2) {
    if (typeof n === "number") { //ngecek number bener gak
      if (n > 100) { //kondisi salah
        return "parameter n tidak boleh melebihi 100";
      } else if (n < 1) {
        return "parameter n minimal 1";
      } else {
        if (tipe2 !== "#") {
          return "parameter tipe (2) tidak boleh selain pagar";
        } else if (tipe1 !== " ") {
          return "parameter tipe (1) tidak boleh selain spasi";
        } else {
          //string kosong untuk cetak char space
          let baris = "";
  
          for (let i = 1; i <= n; i++) {
            //pengulangan
            for (let j = 1; j <= n - i; j++) {
              //pengulangan lagi untuk cetak banyaknya char space
              baris += " "; //akan menimpa char space dengan spasi
            }
            for (let k = 1; k <= i; k++) {
              //pengulangan iterasi
              baris += tipe2; //cetak char hash
            }
            baris += "\n"; //menambah baris baru
          }
          return baris;
        }
      }
    } else {
      return "parameter n tidak boleh selain number";
    }
  }
  console.log(staircase(4, " ", "#"));
  export default staircase;
  
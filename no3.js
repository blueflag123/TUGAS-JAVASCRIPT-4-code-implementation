let FazzFood = (harga, voucher, jarak, pajak) => {
    let pemotonganHarga = "";
        if (harga >= 50000 && voucher == "FAZZFOOD50") {
            let diskon = harga * 0.5;
            if (diskon >= 50000) {
                pemotonganHarga += `${diskon = 50000}`;
            } else {
                pemotonganHarga += diskon;
            }
        } else if (harga >= 25000 && voucher == "DITRAKTIR60") {
            let diskon = harga * 0.6;
            if (diskon >= 30000) {
                pemotonganHarga += `${diskon = 30000}`;
            } else {
                pemotonganHarga += diskon;
            }
        } else {
            return "harga tidak mencapai ketentuan";
        } 
    let ongkosPengiriman = 0;
        if (jarak <= 2) {
            ongkosPengiriman += + 5000;
        } else {
            ongkosPengiriman += 5000 + ((jarak-2)*3000);
        }
    let restoTax = 0;
    if (pajak == true) {
        restoTax = 0.05 * harga;
    } else {
        restoTax = 0;
    }
    let SubTotal = harga - pemotonganHarga + ongkosPengiriman + restoTax;

    return console.log(`Harga: ${harga} \npemotonganHarga: ${pemotonganHarga} \nBiaya Antar: ${ongkosPengiriman} \nPajak: ${restoTax} \nSubTotal: ${SubTotal}`);
}

FazzFood(75000,"FAZZFOOD50",5, true);




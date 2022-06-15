let divideAndSort = (num) => {
    let hasil = num.toString().split("0");
    arrBaru = hasil.map(item=> {
        return item.split("").sort((a,b)=> {return a-b}).join("");
    })
    return Number.parseInt(arrBaru.join(""));
};
console.log(divideAndSort(5956560159466056));

function cong() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    tong = a + b;
    document.getElementById("result").innerHTML =("Tổng là: "+ tong);
}
function tru() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    hieu = a - b;
    document.getElementById("result").innerHTML =("Hiệu là: "+ hieu) ;
}
function nhan() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    tich = a * b;
    document.getElementById("result").innerHTML = ("Tích là: "+tich);
}
function chia() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    thuong = a / b;
    document.getElementById("result").innerHTML = ("Thương là: " +thuong) ;
}
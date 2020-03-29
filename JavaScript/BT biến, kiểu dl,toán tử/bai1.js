var vatly;
var hoahoc;
var sinhhoc;
vatly=prompt('Nhập điểm vật lý:');
hoahoc=prompt('Nhập điểm hóa học:');
sinhhoc=prompt('Nhập điểm sinh học');
var diemly=parseInt(vatly);
var diemhoahoc=parseInt(hoahoc);
var diemsinhhoc=parseInt(sinhhoc);
var tbc =(diemly+diemhoahoc+diemsinhhoc)/3;
document.write("Điểm trung bình="+tbc);
document.write("<br>")
var Tong = diemly+diemhoahoc+diemsinhhoc;
document.write("Tổng điểm="+ Tong);

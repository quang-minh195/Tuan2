function tinhngay(){
    let a = parseInt(document.getElementById("thang").value);
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            text = ('có 31 ngày');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            text = ('có 30 ngày');
            break;
        case 2:
            text = ('có 28 hoặc 29 ngày');
            break;
    }
document.getElementById("ngay").innerHTML=('Tháng '+ a  +text);
}


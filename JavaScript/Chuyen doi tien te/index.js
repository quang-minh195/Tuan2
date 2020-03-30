function Doitien() {
    var a = parseInt(document.getElementById("amount").value);
    var b = (document.getElementById("fcurrency").value);
    var c = (document.getElementById("tcurrency").value);
    if (b =="VND"){
        if (c =="VND"){M = a}
        if (c =="USD"){M = a*0.000043}
        if (c =="EUR"){M = a*0.000039}
        if (c =="KRW"){M = a* 0.052}
    }
    if(b =="EUR"){
        if(c =="VND"){M = a*25.400}
        if(c =="EUR"){M = a}
        if(c =="USD"){M = a*1.10}
        if(c =="KRW"){M = a*1348}
    }
    if (b =="USD"){
        if(c =="VND"){M = a*23.200}
        if(c =="EUR"){M = a*0.91}
        if (c =="USD"){M = a}
        if (c =="KRW"){M = a*1228}
    }
    if (b =="KRW"){
        if (c =="VND"){M = a*19.30}
        if (c =="USD"){M = a*0.00081}
        if (c =="EUR"){M = a*0.00074}
        if (c =="KRW"){M = a}
    }
    document.getElementById("result").innerHTML=M
}

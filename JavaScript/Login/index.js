var ID= prompt("Bạn là ai?");

if (ID == "admin"){
    alert("welcome!");
} else if (ID != "admin") {
    alert("Canceled");
} else {
    alert("I don't know you!");
}


var pass=prompt("Nhập pass đi bạn: ");

if (pass == "themaster") {
 alert("Welcome");
} else if (pass =="null") {
    alert("Canceled");
} else {
    alert("Wrong password");
}
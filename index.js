var bəbəklər = document.getElementsByClassName("bəbək");
// console.log(bəbəklər);

document.onmousemove = function () {
    // var x = event.clientX;
    // var y = event.clientY;
    // console.log("x'də " + x + " y'də " + y);
    // var genişlik = window.innerWidth;
    // var yüksəklik = window.innerHeight;
    // console.log("Genişlik : " + genişlik + " Yüksəklik : " + yüksəklik);


    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //  console.log("x'də " + x + " y'də " + y);

    // bəbəklər[0].style.top = y;
    // bəbəklər[0].style.left = x;

    // bəbəklər[1].style.top = y;
    // bəbəklər[1].style.left = x;

    for (var i = 0; i < 2; i++) {
        bəbəklər[i].style.top = y;
        bəbəklər[i].style.left = x;

        bəbəklər[i].style.transform = "translate(- " + x + ",-" + y + ")"
    }
}
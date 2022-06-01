function showCoupon() {
    var a = document.getElementById("coupon-enter-contain");

    if (a.style.display == "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

function showOrderSum() {
    var b = document.getElementById("order-sum-table");
    var c = document.getElementsByClassName("sum-up-arrow");

    if (b.style.display == "none") {
        b.style.display = "block";
        c[0].classList.add("sum-up-arrow-rotate");
    } else {
        b.style.display = "none";
        c[0].classList.remove("sum-up-arrow-rotate");
    }
}

function showShipDetail() {
    var d = document.getElementById("ship-form");

    if (d.style.display == "none") {
        d.style.display = "block";
    } else {
        d.style.display = "none";
    }
}
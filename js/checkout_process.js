function showCoupon() {
    const a = document.getElementById("coupon_enter_contain");

    if (a.style.display == "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

function showOrderSum() {
    const b = document.getElementById("order_sum_table");
    const c = document.getElementsByClassName("sum_up_arrow");

    if (b.style.display == "none") {
        b.style.display = "block";
        c[0].classList.add("sum_up_arrow_rotate");
    } else {
        b.style.display = "none";
        c[0].classList.remove("sum_up_arrow_rotate");
    }
}

function showShipDetail() {
    const d = document.getElementById("ship_form");

    if (d.style.display == "none") {
        d.style.display = "block";
    } else {
        d.style.display = "none";
    }
}
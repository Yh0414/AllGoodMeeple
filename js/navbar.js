function openNavbar() {
    const ham_menu_detail = document.getElementById("ham_menu_detail");
    ham_menu_detail.style.display = "block";
}

function closeNavbar() {
    ham_menu_detail.style.display = "none";
}

function spreadCategoryList(){
    const category_list = document.getElementById("category_list");
    const chevron_right = document.getElementsByClassName("chevron_right");

    if (category_list.style.display == "none") {
        category_list.style.display = "block";
        chevron_right[0].classList.add("chevron_right_rotate");
    } else {
        category_list.style.display = "none";
        chevron_right[0].classList.remove("chevron_right_rotate");
    }
}
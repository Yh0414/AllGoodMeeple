function openNavbar() {
    var ham_menu_detail = document.getElementById("ham-menu-detail");
    ham_menu_detail.style.display = "block";
}

function closeNavbar() {
    ham_menu_detail.style.display = "none";
}

function spreadCategoryList(){
    var category_list = document.getElementById("category-list");
    var chevron_right = document.getElementsByClassName("chevron-right");

    if (category_list.style.display == "none") {
        category_list.style.display = "block";
        chevron_right[0].classList.add("chevron-right-rotate");
    } else {
        category_list.style.display = "none";
        chevron_right[0].classList.remove("chevron-right-rotate");
    }
}
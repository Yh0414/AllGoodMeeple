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

    category_list.style.display = "block";
    chevron_right[0].className = "chevron_right_rotate";
}
var flag; // The mouse click
var downX; // The location of x for mouse click
var scrollLeft; // The offset of the current element scroll bar

cat_nav.addEventListener("mousedown", function (event) {
    flag = true;
    downX = event.clientX; // Gets the x location of the click
    scrollLeft = this.scrollLeft; // Gets the offset of the current element's scroll bar
});

cat_nav.addEventListener("mousemove", function (event) {
    if (flag) { // Check if the mouse is down to scroll the element area
        // Gets the moving X-axis
        var moveX = event.clientX; 
        // The x-index of the current move minus the x-index just clicked gets the mouse slide distance
        var scrollX = moveX - downX; 
        // Offset of the scroll bar when the mouse is pressed minus the current slider distance
        this.scrollLeft = scrollLeft - scrollX;
        console.log(scrollX)
    }
});

// Lift the mouse and stop dragging
cat_nav.addEventListener("mouseup", function () {
    flag = false;
});

// Stop dragging the mouse away from the element
cat_nav.addEventListener("mouseleave", function (event) {
    flag = false;
});
window.onload = function() {
	var carouImg = document.getElementById("carousel_images");
	var carouWrap = document.getElementById("carousel_wrap");
	var img = carouImg.getElementsByTagName("img")[0];
	var leftArrow = document.getElementsByClassName("left-arrow")[0];
	var rightArrow = document.getElementsByClassName("right-arrow")[0];
	var oBtn = document.getElementsByClassName("dot");
	var index = 0;
	var index_length = oBtn.length;

	carouImg.classList.add("transition");
	carouImg.style.left = -img.clientWidth + "px"; 
	console.log(carouImg.style.left);
	carouWrap.style.height = img.offsetHeight + "px";

	document.body.onresize = function () { 
		carouImg.style.left = -img.clientWidth + "px";
		carouWrap.style.height = img.offsetHeight + "px";
	}
	
	// click right arrow
	rightArrow.onclick = function() {
		next_pic();
		showCurrentDot(index);
	}

	// click left arrow
	leftArrow.onclick = function () {
		pre_pic();
		showCurrentDot(index);
	}
	
	// click pointers
	for (let i = 0; i < oBtn.length; ++ i) {
		oBtn[i].onclick = function() {
			var newLeft = (-img.clientWidth) * (i + 1);
			carouImg.style.left = newLeft + 'px';
			console.log(i);
			showCurrentDot(i);
		}
	}

	// next image
	function next_pic() {
		var left = parseInt(carouImg.style.left);
		if (left <= (-img.clientWidth) * (index_length + 1)) {
			carouImg.classList.remove("transition");
			var newLeft = -img.clientWidth * 1;
			carouImg.style.left = newLeft + 'px';
			newLeft = -img.clientWidth * 2;
			carouImg.classList.add("transition");
			index = 1;
		}
		else {
			// normal
			var newLeft = parseInt(carouImg.style.left) - img.clientWidth;
			(index == (index_length - 1)) ? index = 0 : index += 1;
		}
		carouImg.style.left = newLeft + 'px';
		console.log(newLeft);
	}

	// previous image
	function pre_pic() {
		var left = parseInt(carouImg.style.left);
		if (left >= -10) {
			carouImg.classList.remove("transition");
			var newLeft = -img.clientWidth * index_length;
			carouImg.style.left = newLeft + 'px';
			newLeft = -img.clientWidth * (index_length - 1);
			carouImg.classList.add("transition");
			index = index_length - 2;
		}
		else {
			// normal
			var newLeft = parseInt(carouImg.style.left) + img.clientWidth;
			(index == 0) ? index = (index_length - 1) : index -= 1;
		}
		carouImg.style.left = newLeft + 'px';
		console.log(newLeft);
	}

	function showCurrentDot(index) {
		for (let i = 0; i < oBtn.length; ++ i) {
			(i == index) ? oBtn[i].classList.add("active") : oBtn[i].classList.remove("active");
		}
	}

	// Set the multicast timer
	var timer = setInterval(function(){
		next_pic();
		showCurrentDot(index);
	}, 3000);

	carouWrap.onmouseover = function() {
		clearInterval(timer);
	}

	carouWrap.onmouseout = function() {
		timer = setInterval(function () {
			next_pic();
			showCurrentDot(index);
		}, 3000);
	}
}

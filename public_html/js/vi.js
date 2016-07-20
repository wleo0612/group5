function mainInit() {
	var visual = document.getElementById("main_visual");
	var child1 = visual.children[0];
	var child1_1 = child1.getElementsByTagName('li');
	child1_1[0].children[0].onclick = function () {
		child1.style.backgroundImage = "url('./images/container/vi_main_1.jpg')";
	}
	child1_1[1].children[0].onclick = function () {
		child1.style.backgroundImage = "url('./images/container/vi_main_2.jpg')";
	}
	child1_1[2].children[0].onclick = function () {
		child1.style.backgroundImage = "url('./images/container/vi_main_3.jpg')";
	}
	child1_1[3].children[0].onclick = function () {
		child1.style.backgroundImage = "url('./images/container/vi_main_4.jpg')";
	}
	child1_1[4].children[0].onclick = function () {
		child1.style.backgroundImage = "url('./images/container/vi_main_5.jpg')";
	}
}
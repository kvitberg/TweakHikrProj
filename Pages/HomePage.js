var hikes = require("hikes");

function goToImage(arg) {
	var image = arg.data;
	router.push("editHike", image);
}

function goToHomePage() {
	router.goto("splash");

}

module.exports = {
	hikes: hikes,
	goToHomePage: goToHomePage,
	goToImage: goToImage
};

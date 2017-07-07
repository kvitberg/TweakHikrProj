var hike = this.Parameter;

var name = hike.map(function(x) { return x.name; });


function goBack() {
	router.goBack();
}
function blackWhite(){
	//TODO
}
function brightenImage(){
	//TODO
}
function darkenImage(){
	//TODO
}
function saturateImage(){
	//TODO
}
function deSaturateImage(){
	//TODO
}

module.exports = {
	name: name,
	goBack: goBack,
	blackWhite: blackWhite,
	brightenImage: brightenImage,
	darkenImage: darkenImage,
	saturateImage: saturateImage,
	deSaturateImage: deSaturateImage,
};

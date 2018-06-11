var screen = document.getElementById('screen');
var caption = document.getElementById('caption');
var info = document.getElementById('info');
var thumbnails = document.getElementById('thumbnails');

function initGallery() {
	for(var i = 0; i < images.length; i++) {
		var image = images[i];
		var img = document.createElement('img');
		img.src = 'images/thumbs/thumb_' + images[i].url;
		img.setAttribute('width', '170');
		img.setAttribute('data-index', i);
		img.addEventListener('click', changeImage);
		thumbnails.appendChild(img);
	}


};

function changeImage(event) {
	var target = event.currentTarget;
	var index = target.getAttribute('data-index');
	loadImage(index);
};

function loadImage(index) {
	var image = images[index];
	screen.src = 'images/' + image.url;
	caption.textContent = image.caption;
	info.textContent = image.info;
};

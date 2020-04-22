let img_id = 1;
let img_id_text = "";

const show1_img = () => {
	let img = document.getElementById("img");
	img.src = "assets/img/index/1.jpg";
	img_id = 1;
}

const show2_img = () => {
	let img = document.getElementById("img");
	img.src = "assets/img/index/2.jpg";
	img_id = 2;
}

const show3_img = () => {
	let img = document.getElementById("img");
	img.src = "assets/img/index/3.jpg";
	img_id = 3;
}

const show4_img = () => {
	let img = document.getElementById("img");
	img.src = "assets/img/index/4.jpg";
	img_id = 4;
}

const show5_img = () => {
	let img = document.getElementById("img");
	img.src = "assets/img/index/5.jpg";
	img_id = 5;
}


const show_last = () => {
	if(img_id == 1) img_id = 5;
	else img_id--;
	
	show_img(img_id);
}

const show_next = () => {
	if(img_id == 5) img_id = 1;
	else img_id++;
	
	show_img(img_id);
}

const show_img = (num) => {
	img_id_text = "assets/img/index/"+num+".jpg";
	let img = document.getElementById("img");
	img.src = img_id_text;
}

const carousel = () => {
	window.setInterval(() => {
		if(img_id == 5) img_id = 1;
		else img_id++;
		
		img_id_text = "assets/img/index/"+img_id+".jpg";
		let img = document.getElementById("img");
		img.src = img_id_text;
	},2000);
}

carousel();


let toIndex = () => {
	window.location.href = "index.html";
}

let toNotice = () => {
	window.location.href = "page/notice.html";
}

let toFilm = () => {
	window.location.href = "page/film.html";
}

let toInfo = () => {
	window.location.href = "page/info.html";
}

let toWe = () => {
	window.location.href = "page/aboutWe.html";
}

















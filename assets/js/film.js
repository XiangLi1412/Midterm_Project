const show_thank = () => {
	let tel = document.getElementById("tel").value;
	let email = document.getElementById("email").value;
	let reply = document.getElementById("reply").value;
	
	alert(`非常感謝您的回覆!!!\n我們已經收到您填寫的訊息~\n\n以下是您的回覆資料 :\n您的電話號碼: ${email}\n您的信箱 : ${tel}\n您想說的話 : \n${reply}\n\n按下確定按鈕後會回到網頁最上端喔~`);
	document.location.href = "film.html";
}


let img_id = 12;
let img_id_text = "";

const carousel = () => {
	window.setInterval(() => {
		if(img_id == 22) img_id = 12;
		else img_id++;
		
		img_id_text = "../assets/img/film/"+img_id+".jpg";
		let img = document.getElementById("img");
		img.src = img_id_text;
	},1500);
}

carousel();

// file:///C:/Users/USER/Desktop/middle/page/film.html

// 搞笑

let joke_text = "";
let joke_num = 23;

let plus = true;

const c_joke = () => {
	window.setInterval(() => {
		if(plus)  joke_num+=1;
		if(!plus) joke_num-=1;
		
		console.log(joke_num);
		
		if(joke_num == 36) plus=!plus;
		if(joke_num == 23) plus=!plus;
		
		
		
		joke_text = "../assets/img/film/"+joke_num+".jpg";
		let joke = document.getElementById("joke");
		joke.src = joke_text;
	},100);
}

c_joke();




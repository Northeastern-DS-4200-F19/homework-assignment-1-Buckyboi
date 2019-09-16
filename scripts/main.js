let appleLogo = document.querySelector("img");

appleLogo.onclick = function(){
	let imgsrc = appleLogo.getAttribute("src");
	if (imgsrc == "images/apple-3384010_960_720.png"){
		appleLogo.setAttribute("src","images/apple_logo_PNG19673.png")
	}else if(imgsrc == "images/apple_logo_PNG19673.png"){
		appleLogo.setAttribute("src","images/2000px-Apple_Computer_Logo_rainbow.svg.png")
	}else if(imgsrc == "images/2000px-Apple_Computer_Logo_rainbow.svg.png"){
		appleLogo.setAttribute("src","images/download.jpeg")
	}else{
		appleLogo.setAttribute("src","images/apple-3384010_960_720.png")
	}
}

let gobutton = document.querySelector("button");

gobutton.onclick = function(){
	let product = document.querySelector("select").value;

	if (product == "Mac"){
		window.open("https://www.apple.com/mac"); 
	}else if (product == "IPad"){
		window.open("https://www.apple.com/ipad"); 
	}else if (product == "IPhone"){
		window.open("https://www.apple.com/iphone"); 
	}else if (product == "Watch"){
		window.open("https://www.apple.com/watch"); 
	}else if (product == "TV"){
		window.open("https://www.apple.com/tv"); 
	}
}
//your JS code here. If required.
const url = window.location.href;

let letterCount = 0;

for(let i = 0; i < url.length; i++){
	if((url[i] >= "a" && url[i] <= "z") || (url[i] >= "A" && url[i] <= "Z")){
		letterCount++;
	} 
}

console.log(letterCount);
let inputs = document.getElementsByClassName("code");
window.onload = function() {
    document.getElementById('code-1').focus();
};

for(let t of inputs){
	t.addEventListener("input", inputChanged);
	t.addEventListener("keydown", inputChangedAgain);
}
function inputChanged(event_details){
	let inputTarget = event_details.target;
	let idx = parseInt(inputTarget.id.replace('code-', ''));//1based h but agle pe point kar rha h
	// setTimeout(() => inputs[idx].focus(), 200);
	inputs[idx].focus();
}
function inputChangedAgain(event_details){
	let key = event_details.key;
	let inputTarget = event_details.target;
	if(key.toLowerCase() === 'backspace'){
		event_details.preventDefault();//backspace dabao to peeche wala uda rha tha, par cursor whi
			inputTarget.value  = "";//peeche wala to .value se saaf kar sakte
			let idx = parseInt(inputTarget.id.replace('code-', '')) - 2;//0 based h aur peeche point kr rha
			// setTimeout(() => inputs[idx].focus(), 200);
			if(idx >= 0) inputs[idx].focus();
	}
	if(key.toLowerCase() === 'keydown'){
		console.log("abc")
	}
}


let inputs = document.getElementsByClassName("code");
for(let t of inputs){
	t.addEventListener("input", inputChanged);
	t.addEventListener("keydown", inputChangedAgain);
}
function inputChanged(event_details){
	let inputTarget = event_details.target;
	let idx = parseInt(inputTarget.id.replace('p', ''));//1based h but agle pe point kar rha h
	inputs[idx].focus();
}
function inputChangedAgain(event_details){
	let key = event_details.key;
	if(key.toLowerCase() === 'backspace'){
		event_details.preventDefault();
		let inputTarget = event_details.target;
		inputTarget.value  = "";
		let idx = parseInt(inputTarget.id.replace('p', '')) - 2;//0 based h aur peeche point kr rha
		if(idx >= 0) inputs[idx].focus();
	}
}


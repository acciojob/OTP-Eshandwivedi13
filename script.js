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
	if(idx < inputs.length)inputs[idx].focus();
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

/*//HARSHITA's Code
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            // If input length is 1, move focus to the next input
            if (input.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (event) => {
            // If backspace is pressed and input is empty, focus the previous input
            if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
				

            }
        });
    });
	
    inputs[0].focus(); 
});
*/
/*
window.onload = function() {
    document.getElementById('code-1').focus();
};

let inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if(e.key >= 0 && e.key <= 9) {  // Check if it is a number
            if(index !== inputs.length-1) {  // Check if it is not the last input field
                inputs[index + 1].focus();  // Shift the focus to next input field
            }
        } else if(e.key === "Backspace") {  // Check if backspace is pressed
            if(index !== 0) {  // Check if it is not the first input field
                inputs[index - 1].focus();  // Shift the focus to previous input field
            }
        }
    });
});
*/

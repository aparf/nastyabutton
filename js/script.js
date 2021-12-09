window.addEventListener("load",function(){

	function parseData(){
		money.innerHTML = Math.floor(Math.random() * 100000); //parseData
		return money.innerText; // aditionally have to return ID
	}

	// initalize the variables
	const money = document.querySelector(".money");
	
	let currentValue = parseInt(parseData()); //parse initial value and ADD currentId;

	let difference = 100; // initial difference in money to make nice animation

	// nicely increasing the money timer on website and increase currentValue
	function increaseValue(increase){
		let needTime = increase / 10;
		const countDown = setInterval(()=>{
			money.innerHTML++;
			if (money.innerHTML - currentValue >= increase){
				clearInterval(countDown);
			}
		}, 1000 * needTime / increase)
		currentValue += difference;
	}


	function checkNew(){
		// let newValue = parseData();
		console.log('from checkNew ', currentValue);
		let newValue = currentValue + Math.floor(Math.random() * 100); // not newValue but newID
		console.log('...differnce ', newValue - currentValue);
		// this just for test
		if (newValue != currentValue) 
			increaseValue(newValue - currentValue);
		// if currId != newId --> increase
	}

	increaseValue(difference);
	console.log('after fake increase ',currentValue);
	setInterval(checkNew, 50000); // change the time when it parses new data
})

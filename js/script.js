window.addEventListener("load",function(){

	// parse data from given url
	function parseData(url){
		// money.innerHTML = Math.floor(Math.random() * 100000); //parseData
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url, false);
		xhr.send();

		if (xhr.status == 200){
			var totalSpendings = JSON.parse(xhr.responseText)['oops_total'];
			money.innerHTML = totalSpendings;
			return(totalSpendings);
		} else
			console.log(xhr.status + ' ' + xhr.satusText);
	}

	// nicely increasing the money timer on website and increase currentValue
	function increaseValue(increase){
		let needTime = increase / 10;
		const countDown = setInterval(()=>{
			money.innerHTML++;
			console.log('current value ', currentValue, '; current difference ', currentValue - money.innerHTML);
			if (parseInt(money.innerHTML) - (currentValue-increase) >= increase){
				clearInterval(countDown);
			}
		}, 1000 * needTime / increase)
		currentValue += difference;
	}

	// checking whether new Data added
	function checkNew(url){
		let newValue = parseData(url);
		if ((newValue+100) != currentValue) 
			increaseValue(newValue - currentValue);
	}


	// initalize the variables
	const money = document.querySelector(".money");
	let url = 'https://dev.oops.finance/api/v1/public/oops_total';
	let currentValue = parseInt(parseData(url)); //parse initial value and ADD currentId;
	let difference = 100; // initial difference in money to make nice animation

	console.log('before fake increase ',currentValue);
	increaseValue(difference);
	setInterval(checkNew, 25000, url); // change the time when it parses new data
})

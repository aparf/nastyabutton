window.addEventListener("load",function(){

	// parse data from given url
	function parseData(url){
		// money.innerHTML = Math.floor(Math.random() * 100000); //parseData
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url, false);
		xhr.send();

		if (xhr.status == 200){
			var totalSpendings = JSON.parse(xhr.responseText)['oops_total'];
			return(totalSpendings);
		} else
			console.log(xhr.status + ' ' + xhr.satusText);
	}

	// nicely increasing the money timer on website and increase currentValue
	function increaseValue(increase){
		let needTime = increase / 10;
		const countDown = setInterval(()=>{
			money.innerHTML++;
			console.log('current value ', currentValue, '; current difference ', money.innerHTML, ' current difference:', currentValue-money.innerHTML);
			if ((currentValue) - parseInt(money.innerHTML) == 0){
				clearInterval(countDown);
			}
		}, 1000 * needTime / increase)
		currentValue += increase;
	}

	// checking whether new Data added
	function checkNew(url){
		let newValue = parseData(url) + 100;
		console.log('new value == ', newValue, ' currentValue == ', currentValue);
		if (newValue != currentValue){
			console.log("no!");
			increaseValue(newValue - currentValue);
		}
	}

	// initalize the variables
	const money = document.querySelector(".money");
	let url = 'https://dev.oops.finance/api/v1/public/oops_total';
	let currentValue = parseInt(parseData(url)); //parse initial value
	money.innerHTML = currentValue;

	let difference = 100; // initial difference in money to make nice animation

	increaseValue(difference);
	console.log(currentValue);
	setInterval(checkNew, 25000, url); // change the time when it parses new data
})

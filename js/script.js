window.addEventListener("load",function(){
	const money = document.querySelector(".moneytext");
	var check = document.querySelector(".button");
	function parseData(){
		// will be added later
		money.innerHTML = 12124; // add random number generator
		initialValue = 12124;
	}

	document.querySelector(".button").addEventListener("click", newAdded);
	function newAdded(){
		check = !(check);
		initialValue = money.innerHTML;
	}
	function increase(){
		// assuming user spents 10-15 seconds on the website
		// 'fake' increasement in money is 100-150, so each second +10 dollars;
		if (check)
			if (parseInt(money.innerHTML) - parseInt(initialValue) < 100) {
				money.innerHTML++;
			}
			else 
				check = !(check);

		// if (check){
		// 	money.innerHTML = (parseInt(money.innerHTML) - parseInt(initialValue)) < 100 ? parseInt(money.innerHTML) + 1 : money.innerHTML; //add random number generator from 100 to 150
		// }
	}

	parseData();
	increasement = 100;
	timeSpend = 10;
	setInterval(increase, 1000 * (timeSpend/increasement))
})


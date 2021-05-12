"user strict";
// Задание основных констант
// Массив с данными о кофе
const arraysCoffee = [
		['lacup-150', 'Латте', '150 ml', '80'], 
		['lacup-200', 'Латте', '200 ml', '120'], 
		['lacup-300', 'Латте', '300 ml', '160'], 
		['mocup-150', 'Мокко', '150 ml', '120'], 
		['mocup-200', 'Мокко', '200 ml', '180'], 
		['mocup-300', 'Мокко', '300 ml', '240'], 
		['gecup-150', 'Глясе', '150 ml', '100'], 
		['gecup-200', 'Глясе', '200 ml', '150'], 
		['gecup-300', 'Глясе', '300 ml', '200'], 
		['lucup-150', 'Ланго', '150 ml', '60'], 
		['lucup-200', 'Ланго', '200 ml', '90'], 
		['lucup-300', 'Ланго', '300 ml', '120']];
// Переменная выбора кофе
let setCoffee =[];
let arrayCups = ['null-cup', ];
// Другие переменные и массивы
const someCache = [
		'10-rubles.png',
		'50-rubles.png',
		'100-rubles.png',
		'200-rubles.png',
		'500-rubles.png'];
let yourCache = [
		'2000-visagold-rubles.png',
		'1000-master-rubles.png',
		'5000-bitcoin-rubles.png'];
let arrPayment = [0, ];
let sumPayment = 0;
let outchanges = 0;
let changecoin = 0;
// Переменные для эффекта оплаты
let rubles = document.querySelectorAll("img[src$='-rubles.png']");
let cardes = document.querySelectorAll("img[src$='-payt.jpg'");
// Функция выбора для кофе
function selectCoffee(indx) {
		setCoffee = arraysCoffee[indx];
		arrayCups.push(setCoffee[0]);
		document.querySelector('[data-set=' + setCoffee[0] + ']').classList.toggle('cupsof');
		document.querySelector('[data-set=' + arrayCups[arrayCups.length-2] + ']').classList.toggle('cupsof');
		arrayCups.shift();
		document.querySelector('#yourOrdered').textContent = setCoffee[1] + ', ' + setCoffee[2] + '.';
		document.querySelector('#yourInvoice').textContent = setCoffee[3] + ',0 ' + 'rub.';
		document.querySelector('#orderStatus').textContent = 'Внесите оплату';
				console.log('Ваш заказ: ' + setCoffee[1] + ', ' + setCoffee[2]);
				console.log('К оплате: ' + setCoffee[3] + '.0' + 'rub.');
				console.log(setCoffee);
				console.log(arrayCups);
		}
// Функция раскрытия кошелька: 

//Выполняется модальным окном JQuery

// Функция для наличных денег
function cacheWallet() {
		for (let i=0; i<5; i++) {
				let j = Math.floor(Math.random()*5);
				yourCache = yourCache.concat(someCache[j]);
						console.log(j); // check j random
						console.log(yourCache); // check yourCache
				}
		}   
function takeCache() {
		document.querySelector('#cache0').src = yourCache[0];
		document.querySelector('#cache1').src = yourCache[1];
		document.querySelector('#cache2').src = yourCache[2];
		document.querySelector('#cache3').setAttribute("data-set", parseInt(yourCache[3]));
				document.querySelector('#cache3').src = yourCache[3];
		document.querySelector('#cache4').setAttribute("data-set", parseInt(yourCache[4]));
				document.querySelector('#cache4').src = yourCache[4];
		document.querySelector('#cache5').setAttribute("data-set", parseInt(yourCache[5]));
				document.querySelector('#cache5').src = yourCache[5];
		document.querySelector('#cache6').setAttribute("data-set", parseInt(yourCache[6]));
				document.querySelector('#cache6').src = yourCache[6];
		document.querySelector('#cache7').setAttribute("data-set", parseInt(yourCache[7]));
				document.querySelector('#cache7').src = yourCache[7];
		}
function clearWallet() {
		yourCache = [
			'2000-visagold-rubles.png',
			'1000-master-rubles.png',
			'5000-bitcoin-rubles.png']; // clear cache
						console.log(yourCache); // check yourCache
		}
// Функция продажи и выдачи кофе
function offerCoffee() {
		let costCoffee = parseInt(document.querySelector('#yourInvoice').textContent);
		let paytCoffee = sumPayment;
				console.log('Cost coffee: ' + costCoffee);
				console.log('Your payt: ' + paytCoffee);
						if (costCoffee<=paytCoffee) {
								outchanges = paytCoffee - costCoffee;
								document.querySelector('#yourChange').textContent = outchanges + ' rub';
								document.querySelector('#trayCoffee').src = '03-item-03.png';
								document.querySelector('#orderStatus').textContent = 'Кофе готовится';
								console.log('Кофе готовится');
								console.log('Your change ' + outchanges);
								setTimeout(doneCoffee, 5000);
								arrPayment = [0, ];
								getChange()
						} else {
									let more = costCoffee - paytCoffee;
									document.querySelector('#orderStatus').textContent = 'Внесите ещё ' + more + ' rub';
									console.log('Внесите ещё ' + more + 'rub');
									sumPayment = 0;
							}
		}
// Функция внесения оплаты за кофе
function yourPayment() {
		let payMoney = parseInt(document.querySelector('#insertPayt').value);
				if (payMoney >= 1000) payMoney = Number(setCoffee[3]);
				console.log(payMoney);
		arrPayment = arrPayment.concat(payMoney);
				for (i=0; i<arrPayment.length; i++) {
						sumPayment += arrPayment[i];
						}
				document.querySelector('#yourPayment').textContent = sumPayment + ' rub';
						console.log(arrPayment);
						console.log(arrPayment.length);
						console.log(sumPayment);
		offerCoffee()
		}
//Функция выдачи сдачи
function getChange() {
		let sizeTrayChange = document.querySelector('#trayChange');
		let coordTrayChange = sizeTrayChange.getBoundingClientRect();
				console.log('trayWidth ' + sizeTrayChange.offsetWidth);
				console.log('trayHeight ' + sizeTrayChange.offsetHeight);
				console.log(sizeTrayChange.getBoundingClientRect());
				console.log('trayTop ' + coordTrayChange.top);
				console.log('trayLeft ' + coordTrayChange.left);
		let widthTrayChange = trayRandom(150, sizeTrayChange.offsetWidth);
				console.log('widthTrayChange: ' + widthTrayChange);
				if (outchanges < 9) return false;
					else if (outchanges >= 200) changecoin = 200;
					else if (outchanges >= 100) changecoin = 100;
					else if (outchanges >= 50) changecoin = 50;
					else if (outchanges >= 10) changecoin = 10;
					document.querySelector('#trayChange').innerHTML += `<img onclick='this.style.display="none";' style="left:${widthTrayChange}px; " class="coinChanges" src="${changecoin}_rubles.png">`;
					console.log('changecoin = ' + changecoin);
					outchanges -= changecoin; 
						if (outchanges !== 0) {
						getChange() 
						}
							else {
							outchanges = 0;
							changecoin = 0;
							console.log(outchanges);
							console.log(changecoin);
							}
				}
function trayRandom(min,max) {
		console.log('min: ' + min + ', ' + 'max: ' + max);
		return Math.random()*(max-min)+50;
}
// Функция готового кофе
function doneCoffee() {
		document.querySelector('#doneCoffee').src = 'alegria-coffee.png';
		document.querySelector('#trayCoffee').src = '13-item-13.png';
		document.querySelector('#orderStatus').textContent = 'Ваш кофе готов';
		}
//Функция очистки переменных
function clearFunction() {
		document.querySelector('#doneCoffee').src = '';
		document.querySelector('#orderStatus').textContent = 'Приходите снова!';
		document.querySelector('#trayChange').innerHTML = '<img src="get-change.png" width="100%">';
		document.querySelector('#insertPayt').value = '0';
		document.querySelector('#yourChange').textContent = '';
		document.querySelector('#yourPayment').textContent = '';
		document.querySelector('#yourInvoice').textContent = '';
		document.querySelector('#yourOrdered').textContent = '';
		document.querySelector('[data-set=' + setCoffee[0] + ']').classList.toggle('cupsof');
		changecoin = 0;
		outchanges = 0;
		sumPayment = 0;
		arrPayment = [0, ];
		arrayCups = ['null-cup', ];
		setCoffee =[];
		}

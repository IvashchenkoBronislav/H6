//______________________ 1 задание________________
async function wait() {
	await new Promise(resolve => setTimeout(resolve, 1000));
  
	return 10;
}
  
function f() {
	wait().then(result => console.log(result));
}
  
f();

//______________________ 3 задание________________
const renderWeatherNew =(weatherNew)=>{
	document.getElementById('temp').innerHTML= `${weatherNew.current.temp}`
	document.getElementById('city').innerHTML= `${weatherNew.timezone}`
	document.getElementById('wind_speed').innerHTML= `${weatherNew.current.wind_speed} м/c`
	document.getElementById('humidity').innerHTML= `${weatherNew.current.humidity}%`

	const img = document.querySelector("#img");		
		let id = weatherNew.current.weather[0].id;
		if (id <299){
			img.src="src/11n@2x.png"
		}else if (300<=id && id<321){
			img.src="src/09d@2x.png"
		}else if (500<=id && id<504){
			img.src="src/10d@2x.png"
		}else if (505<=id && id<511){
			img.src="src/13d@2x.png"
		}else if (512<=id && id<532){
			img.src="src/09d@2x.png"
		}else if (600<=id && id<623){
			img.src="src/13d@2x.png"
		}else if (700<=id && id<799){
			img.src="src/50d@2x.png"
		}else if (id==800){
			img.src="src/01d@2x.png"
		}else if (id==801){
			img.src="src/02d@2x.png"
		}else if (id==802){
			img.src="src/03d@2x.png"
		}else if (id==803){
			img.src="src/03d@2x.png"
		}else if (id==804){
			img.src="src/03d@2x.png"
		} 
}


fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.45466&lon=30.5238&units=metric&exclude=hourly,daily&appid=a111dfd597058b057ab8b7b9d885cb22", {
	"method": "GET"
})
.then(response => response.json())
.then((result) => {
	console.log(result);
	renderWeatherNew(result)

})
.catch(err => {
	console.log(err);
});
















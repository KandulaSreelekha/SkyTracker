const apiKey = "95496efcd031837e37f8e1488c458390";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        async function checkweather(city) {
            try {
                const response = await fetch(apiurl + city + `&appid=${apiKey}`)
                if (!response.ok) {
                    throw new Error('Network response is not ok')
                }
                var data = await response.json();
                console.log(data);
            }
            catch (error) {
                console.log("error fetching data:", error)
            }
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + '°C';
            document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
            document.querySelector(".wind").innerHTML = data.wind.speed + ' kmph';
            if(data.weather[0].main=="Clouds"){
            document.querySelector(".weather-icon").src="images/clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
            document.querySelector(".weather-icon").src="images/clear.png";
            }
            else if(data.weather[0].main=="Drizzle"){
            document.querySelector(".weather-icon").src="images/drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
            document.querySelector(".weather-icon").src="images/mist.png";
            }
            else if(data.weather[0].main=="Rain"){
            document.querySelector(".weather-icon").src="images/rain.png";
            }
            document.querySelector(".weather").style.display="block";


        }
        searchbtn.onclick=function(){
        checkweather(searchbox.value);
        }
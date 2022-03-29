let weather = {
    apiKey: '8765ce5084e181013ff860a12385be11',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +" &units=metric&appid=" + this.apiKey).then((response) => {
            if(!response.ok){
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        })
        // .then((data) => console.log(data));
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name} = data;
        const{temp} = data.main;
        console.log(name,temp);
        document.querySelector(".temp").innerText = temp + "°Celcius";
        document.querySelector(".city").innerText = name;
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search button").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("denver");
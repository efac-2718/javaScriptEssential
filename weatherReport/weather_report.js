function showweatherDetails(event){
    event.preventDefault();

     const city = document.getElementById('city').value;
      const apiKey = '9c1fa22f7c67378f9b1d1541d627649a'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`;

       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );



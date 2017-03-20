var axios = require("axios");

const API_KEY = "62f848d80d76d6171586e8b43c71d8c9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;


module.exports = {
	getTemp: function(location){
		var endcodedLocation = encodeURIComponent(location);
		var requestUrl = `${ROOT_URL}&q=${endcodedLocation}`;

		return axios.get(requestUrl).then((res) => {
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		}, (err) => {
			throw new Error(err.response.data.message);
		});
	}
}
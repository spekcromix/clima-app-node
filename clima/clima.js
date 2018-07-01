const axios = require('axios');

const getClima = async(lat, lng) => {
	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=dab680ea7ebc3afc165258126b8a1a72`)
	return resp.data.main.temp;
}

module.exports = {
	getClima
}
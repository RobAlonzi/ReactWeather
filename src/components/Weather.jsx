var React = require("react");
var WeatherForm = require("./WeatherForm.jsx");
var WeatherMessage = require("./WeatherMessage.jsx");
var openWeatherMap = require("../api/openWeatherMap.jsx");


var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){

		this.setState({
			isLoading: true
		});

		openWeatherMap.getTemp(location).then((temp) => {
			this.setState({
				isLoading: false,
				location:location,
				temp: temp
			});
		}, (errorMessage) => {
			alert(errorMessage);
			this.setState({ isLoading: false});
		});


	},
	render: function(){
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>
			}else if(temp && location){
				return <WeatherMessage temp={temp} location={location} />;
			}
			return;
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
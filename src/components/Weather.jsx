var React = require("react");
var WeatherForm = require("./WeatherForm.jsx");
var WeatherMessage = require("./WeatherMessage.jsx");
var openWeatherMap = require("../api/openWeatherMap.jsx");
var ErrorModal = require("./ErrorModal.jsx");


var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp:undefined
		});

		openWeatherMap.getTemp(location).then((temp) => {
			this.setState({
				isLoading: false,
				location:location,
				temp: temp
			});
		}, (errorMessage) => {
			this.setState({ isLoading: false, errorMessage: errorMessage.message});
		});


	},

	componentDidMount: function(){
		var location = this.props.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = "#/";
		}
	},

	componentWillReceiveProps:function(newProps){
		var location = newProps.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = "#/";
		}
	},

	render: function(){
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>
			}else if(temp && location){
				return <WeatherMessage temp={temp} location={location} />;
			}
			return;
		}

		function renderError() {
			if(typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				);	
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
var React = require("react");
var ReactDOM = require("react-dom");

var { Route, Router, IndexRoute, hashHistory } = require("react-router");

var Main = require("./components/Main.jsx");
var Weather = require("./components/Weather.jsx");
var About = require("./components/About.jsx");
var Examples = require("./components/Examples.jsx");

//Load foundation
require("style-loader!css-loader!foundation-sites/dist/foundation.min.css");
$(document).foundation();

//App CSS
require("style-loader!css-loader!./styles/app.css");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />
			<IndexRoute component={Weather} />
		</Route>
	</Router>,
	document.getElementById('app')
);
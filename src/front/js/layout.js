import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { WeekJumbo } from "./component/weekjumbotron";
import { Userprofile } from "./pages/userprofile";
import { NewWeek } from "./pages/newweek";
import { AllWeeks } from "./pages/weeks";
import { Map } from "./pages/maps";
import { Pre } from "./pages/prepage";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/prepage">
							<Pre />
						</Route>

						<Route exact path="/single/:theid">
							<Single />

						<Route exact path="/weekjumbotron">
							<WeekJumbo />
						</Route>
						<Route exact path="/userprofile/">
							<Userprofile />

						</Route>
						<Route exact path="/newweek">
							<NewWeek />
						</Route>
						<Route exact path="/weeks">
							<AllWeeks />
						</Route>
						<Route exact path="/map">
							<Map />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

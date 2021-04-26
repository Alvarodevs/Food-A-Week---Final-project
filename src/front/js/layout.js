import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ScrollToTop from "./component/scrollToTop";
//import Login from "../Login/login";

//Pages
import { Pre } from "./pages/prepage";
import { Home } from "./pages/home";
import { WeekJumbo } from "./component/weekjumbotron";
import { RecipeDetail } from "./component/recipe_detail_jumbo";
import { Userprofile } from "./pages/userprofile";
import { NewWeek } from "./pages/NewWeek";
import { AllWeeks } from "./pages/weeks";

import { Profile } from "./component/profile";

import injectContext from "./store/appContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	const DefaultContainer = () => (
		<>
			<Navbar />
			<Route exact path="/home">
				<Home />
			</Route>
			<Route exact path="/weekjumbotron">
				<WeekJumbo />
			</Route>
			<Route exact path="/recipe_detail_jumbo">
				<RecipeDetail />
			</Route>
			<Route exact path="/userprofile">
				<Userprofile />
			</Route>
			<Route exact path="/new_week">
				<NewWeek />
			</Route>
			<Route exact path="/weeks">
				<AllWeeks />
			</Route>

			<Route exact path="/profile">
				<Profile />
			</Route>
			<Footer />
		</>
	);
	const LoginContainer = () => (
		<>
			<Route exact path="/">
				<Pre />
			</Route>
		</>
	);
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={LoginContainer} />
						<Route component={DefaultContainer} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
			<ToastContainer limit={1} />
		</div>
	);
};

export default injectContext(Layout);

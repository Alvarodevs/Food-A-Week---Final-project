import { apiBaseUrl } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			hits: [],
			from: 0,
			to: 15,
			APP_ID: "ae68e508",
			APP_KEY: "62b671a1e444b07116376c2722805bd3",
			q: [],
			title: "",
			day: "",
			position: "",
			notifyMessage: "Hello to FoodAWeek",
			user: null,
			accessToken: null,
			userMail: ""
		}, //close store
		actions: {
			getRecipes: props => {
				console.log(props);
				let store = getStore();
				const url = `https://api.edamam.com/search?from=${store.from}&to=${store.to}&q=${props}&app_id=${
					store.APP_ID
				}&app_key=${store.APP_KEY}`;
				console.log(url);
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ hits: data.hits }))
					.catch(error => console.log("Error loading message from backend", error));
				let newStoreQ = props;
				setStore({ q: newStoreQ });
			},
			getMoreRecipes: () => {
				// Pendiente añadir el condicional de more == true
				// si no more es false añadir mensaje = no hay más recetas!
				console.log("getMoreRecipesIN");
				let store = getStore();
				var newStoreTo = store.to;
				newStoreTo = newStoreTo + 16;
				setStore({
					to: newStoreTo
				});
				var newStoreFrom = store.from;
				newStoreFrom = newStoreFrom + 16;
				setStore({
					from: newStoreFrom
				});

				const url = `https://api.edamam.com/search?from=${store.from}&to=${store.to}&q=${store.q}&app_id=${
					store.APP_ID
				}&app_key=${store.APP_KEY}`;
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ hits: store.hits.concat(data.hits) }))
					.catch(error => console.log("Error loading message from backend", error));
				console.log("more");
			},

			selectNewRecipe: selectedRecipe => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(selectedRecipe);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`${baseUrl}selectedrecipe`, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			// newWeek: newWeek => {
			// 	let store = getStore();
			// 	var myHeaders = new Headers();
			// 	myHeaders.append("Content-Type", "application/json");

			// 	var raw = JSON.stringify(newWeek);

			// 	var requestOptions = {
			// 		method: "POST",
			// 		headers: myHeaders,
			// 		body: raw,
			// 		redirect: "follow"
			// 	};

			// 	fetch(`${baseUrl}new_weekly_menu`, requestOptions)
			// 		.then(response => response.json())
			// 		.then(result => [{ title: `${store.title}`, days: `${store.hits.title}` }])
			// 		.catch(error => console.log("error", error));
			// },
			addTitleMenu: titleMenu => {
				let store = getStore();
				let newTitleMenu = store.title;
				newTitleMenu = titleMenu;
				setStore({ title: newTitleMenu });
			},
			getWelcomeMessage: () => {},
			signInUser: signInParams => {
				let store = getStore();
				let raw = JSON.stringify(signInParams);
				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(`${apiBaseUrl}/api/sign_in`, requestOptions)
					.then(response => response.json())
					.then(data => {
						setStore({ accessToken: data, user: data, userMail: signInParams.email });
						localStorage.setItem("accessToken", data);
						localStorage.setItem("email", signInParams.email);
					})
					.catch(error => console.log("error", error));
			},
			checkLogin: () => {
				const store = getStore();
				if (localStorage.accessToken && localStorage.email) {
					// the user is logged in
					// { accessToken : 'asdfasdfasdfasdf' }
					setStore({
						accessToken: localStorage.getItem("accessToken"),
						user: localStorage.getItem("accessToken"),
						userMail: localStorage.getItem("email")
					});

					// TODO: move this to the logout action
					//localStorage.removeItem('myData');
					// localStorage.clear();
				}
			},
			isUserAuthenticated: () => {
				const store = getStore();
				return store.accessToken !== null;
			},
			logout: () => {
				const store = getStore();
				let newToken = store.accessToken;
				newToken = null;
				setStore({ accessToken: newToken });
				//setStore({ accessToken: null });
				localStorage.clear();
				console.log("clear all");
			},
			setUser: userParams => {
				setStore({ user: userParams });
			}
		}
	};
};

export default getState;

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
			timeCooking: "1-400",
			newWeeklyMenu: {
				title: "",
				days: []
			},
			notifyMessage: "Hello to FoodAWeek",
			user: null,
			userMail: ""
		}, //close store

		actions: {
			getRecipes: props => {
				let store = getStore();
				const url = `https://api.edamam.com/search?from=${store.from}&to=${store.to}&time=${
					store.timeCooking
				}&q=${props}&app_id=${store.APP_ID}&app_key=${store.APP_KEY}`;
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
				//console.log("getMoreRecipesIN");
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

				const url = `https://api.edamam.com/search?from=${store.from}&to=${store.to}&time=${
					store.timeCooking
				}&q=${store.q}&app_id=${store.APP_ID}&app_key=${store.APP_KEY}`;
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ hits: store.hits.concat(data.hits) }))
					.catch(error => console.log("Error loading message from backend", error));
				//console.log("more");
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

			addTitleMenu: titleMenu => {
				let store = getStore();
				let newTitleMenu = store.newWeeklyMenu["title"];
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
						//debugger;
						localStorage.setItem("accessToken", data["accessToken"]);
					})
					.catch(error => console.log("error", error));
			},
			isUserAuthenticated: () => {
				return localStorage.getItem("accessToken") !== null;
			},
			logout: () => {
				localStorage.removeItem("accessToken");
			},
			setUser: userParams => {
				setStore({ user: userParams });

				setStore(newTitleMenu);
				//console.log(newTitleMenu);
				//Storing title OK;
			},
			addRecipe: (day, meal, name, uri) => {
				let store = getStore();
				let newWeeklyMenu = store.newWeeklyMenu;

				if (!newWeeklyMenu.days[day]) {
					newWeeklyMenu.days[day] = [];
				}
				newWeeklyMenu.days[day][meal] = { name: name, url: uri };

				setStore({ newWeeklyMenu: newWeeklyMenu });
			},
			getDayName: dayNumber => {
				let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				return days[dayNumber];
			},
			getMealName: mealNumber => {
				let meals = ["Breakfast ", "Snack 01 ", "Lunch ", "Snack 02 ", "Dinner "];
				return meals[mealNumber];
			},
			removeMeal: (dayNumber, mealNumber) => {
				let store = getStore();
				let meals = store.newWeeklyMenu.days[dayNumber];
				delete meals[mealNumber];
				alert("Your recipe has been deleted. Select another day, meal or recipe");
				return meals;
			},
			addQuerySelection: userQuery => {
				let store = getStore();
				let query = store.q;
				query = userQuery;
				setStore({ q: [query] });
			},

			addNewWeeklyMenu: () => {
				let store = getStore();
				var raw = JSON.stringify(store.newWeeklyMenu);

				var requestOptions = {
					method: "POST",
					body: raw,
					headers: {
						Authorization: "Bearer " + localStorage.getItem("accessToken"),
						"Content-Type": "application/json"
					}
				};
				fetch(`${apiBaseUrl}/api/new_weekly_menu`, requestOptions)
					.then(response => response.json())
					.then(data => data.result)
					.catch(error => console.log("error", error));
			},
			filterByTime: userTime => {
				let store = getStore();
				let time = store.timeCooking;
				time = userTime;
				setStore({ timeCooking: time });
			}
			// filterByAllergens: allergens => {
			//  let store = getStore();
			// }
		}
	};
};

export default getState;

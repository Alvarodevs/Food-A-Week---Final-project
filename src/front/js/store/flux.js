const baseUrl = "https://3001-teal-crayfish-87w91ixx.ws-eu03.gitpod.io/api/";

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
			newWeeklyMenu: {
				title: "",
				days: []
			}
		}, //close store
		actions: {
			getRecipes: props => {
				let store = getStore();
				const url = `https://api.edamam.com/search?from=${store.from}&to=${store.to}&q=${props}&app_id=${
					store.APP_ID
				}&app_key=${store.APP_KEY}`;
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
			newWeek: () => {
				let store = getStore();

				var dataJson = {
					day: store.day,
					position: store.position,
					uri: store.uri
				};
				console.log(JSON.stringify(dataJson));

				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");

				// var raw = JSON.stringify(newWeek);

				// var requestOptions = {
				// 	method: "POST",
				// 	headers: myHeaders,
				// 	body: raw,
				// 	redirect: "follow"
				// };

				// fetch(`${baseUrl}new_weekly_menu`, requestOptions)
				// 	.then(response => response.json())
				// 	.then(result => [{ title: `${store.title}`, days: `${store.hits.title}` }])
				// 	.catch(error => console.log("error", error));
			},

			addTitleMenu: titleMenu => {
				let store = getStore();
				let newTitleMenu = store.newWeeklyMenu["title"];
				newTitleMenu = titleMenu;
				setStore(newTitleMenu);
				//Storing title OK;
			},

			addRecipe: (day, meal, uri) => {
				let store = getStore();
				let newNewWeeklyMenu = store.newWeeklyMenu;

				if (!([day] in newNewWeeklyMenu["days"])) {
					newNewWeeklyMenu["days"][day] = [];
				}

				console.log(newNewWeeklyMenu);

				// if (!newWeeklyMenu["days"][newElement["day"]].find(meal => meal["name"] === newElement["meal"])) {
				// 	newWeeklyMenu["days"][newElement["day"]].push({
				// 		name: newElement["meal"],
				// 		uri: newElement["recipe"]
				// 	});
				// }
			},

			addDay: day => {
				let store = getStore();
				let newDay = store.day;
				//newDay = day;
				// for (var i = 0; i < newDay.length; i++) {
				// 	if (day != newDay[i]) setStore(newDay.push(day));
				// }
				setStore(newDay.push(day));
				setStore(newDay.sort());
				setStore(newDay.slice(0, 6));
				console.log(newDay);
			},
			addPosition: position => {
				let store = getStore();
				let newPosition = store.position;
				newPosition = position;
				setStore({ position: newPosition });
				//console.log(position);
			},
			addUri: uri => {
				let store = getStore();
				let newUri = store.uri;
				newUri = uri;
				setStore({ uri: newUri });
				//console.log(uri);
			}
		}
	};
};

export default getState;

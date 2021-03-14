const baseUrl = "https://3001-white-hippopotamus-stq1q8um.ws-eu03.gitpod.io/api/";

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
			// monday: [],
			// tuesday: [],
			// wednesday: [],
			// thursday: [],
			// friday: [],
			// saturday: [],
			// sunday: [],
			from: 0,
			to: 15,
			APP_ID: "ae68e508",
			APP_KEY: "62b671a1e444b07116376c2722805bd3",
			q: []
		}, //close store
		actions: {
			getRecipes: props => {
				console.log(props);
				let store = getStore();
				// let newStoreTo = store.to;
				// setStore({
				// 	to: newStoreTo
				// });
				// let newStoreFrom = store.from;
				// setStore({
				// 	from: newStoreFrom
				// });
				//hay que mandar q a context, actualizar con hook
				const url = `https://api.edamam.com/search?from=${store.from}&to=${store.to}&q=${props}&app_id=${
					store.APP_ID
				}&app_key=${store.APP_KEY}`;
				console.log(url);
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ hits: data.hits }))
					.catch(error => console.log("Error loading message from backend", error));
				let newStoreQ = store.q;
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

			// getMondayPlan: monday => {
			// 	let store = getStore();
			// 	let newStore = store.monday;
			// 	setStore({
			// 		monday: newStore
			// 	});
			// },
			// getTursdayPlan: props => {},
			// getWednesdayPlan: props => {},
			// getThursdayPlan: props => {},
			// getFridayPlan: props => {},
			// getSaturdayPlan: props => {},
			// getSundayPlan: props => {},

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
			newWeek: newWeek => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newWeek);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`${baseUrl}newweek`, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;

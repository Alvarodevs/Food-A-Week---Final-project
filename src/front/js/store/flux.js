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
			monday: [],
			tuesday: [],
			wednesday: [],
			thursday: [],
			friday: [],
			saturday: [],
			sunday: []
		}, //close store
		actions: {
			getRecipes: props => {
				console.log(props);
				//APP_ID = ae68e508;
				//APP_KEY = 62b671a1e444b07116376c2722805bd3;
				// url='https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${allergens}'
				const store = getStore();
				const url = `https://api.edamam.com/search?q=${props}&app_id=ae68e508&app_key=62b671a1e444b07116376c2722805bd3`;
				console.log(url);
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ hits: data.hits }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getMoreRecipes: props => {
				//hacer aquí un fetch que pida los siguientes resultados
				console.log(props);
			},
			getMondayPlan: monday => {
				let store = getStore();
				let newStore = store.monday;
				setStore({
					monday: newStore
				});
			},
			getTursdayPlan: props => {},
			getWednesdayPlan: props => {},
			getThursdayPlan: props => {},
			getFridayPlan: props => {},
			getSaturdayPlan: props => {},
			getSundayPlan: props => {},

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

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			recipes: []
		},

		actions: {
			getRecipes: () => {
				const APP_ID = "89991040";
				const APP_KEY = "8868684a401c319d7c41e1d6ec8a2870";
				const query = "chicken";
				const recipeCount = "";
				var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${recipeCount}`;

				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ recipes: data.results }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;

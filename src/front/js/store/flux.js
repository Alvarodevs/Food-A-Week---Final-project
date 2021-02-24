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
            
            APP_KEY: "62b671a1e444b07116376c2722805bd3",
            APP_ID: "ae68e508", 

			recipeFullData: [
				{
					label: "",
					image: "",
					ingredients: {
						text: "",
						weight: ""
					},
					totalTime: "",
					healthLabels: "",
					url: ""
				}
			]
		},
		actions: {
			getRecipes: async () => {
				const response = await fetch(
					`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${allergens}`
				);
				const data = await response.json();
				setRecipes(data.hits);
				console.log(data.hits);
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

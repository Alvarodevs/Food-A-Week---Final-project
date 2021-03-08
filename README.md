Important install
npm install react react-dom leaflet
npm install react-leaflet
npm install react-geocode
npm install debounce

# FoodAWeek project

This is the final project of <a href="https://github.com/Alvarodevs"> Alvaro Garzón </a> and <a href="https://github.com/nitlara"> Anna Lara </a> in the <a href="https://github.com/4GeeksAcademy">4geeksAcademy </a> FullStackDeveloper program.



# About FoodAWeek 

<img src="./src/front/img/eating.png" width="300">![freepik storyset]

## What is it ?

FoodAWeek is a tool to systematize the creation of weekly menus with many recipes at your fingertips.

Look for recipes! Make your menus! Save them! reuse them!
**Save time to eat great.**

## Why now!?

Why not? You are what you eat, fill your fridge with a plan for your stomach! And when you don't feel like it, save a week saved.


## For whom it is? & User profile

Insert here some snaps from IU

## Technologies used for the project

### Frontend

CSS
SASS
BOOTSTRAP
REACT JS

### Backend

Alchemy

### Design 

Draw io
Canva

#### Resources

# How we organize the project

Agile 


<img src="./src/front/img/kanbanFAW.jpg" width="800">

# Project extensions

# About us
<a href="https://github.com/Alvarodevs"> Alvaro Garzón </a> twitter/ linkedin

Breve

<a href="https://github.com/nitlara"> Anna Lara </a> twitter/ linkedin

Breve

# WebApp boilerplate with React JS
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/react-flask-hello/blob/master/src/img/how-to.png?raw=true" /></a>
</p>


### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
$ npm i react-leaflet
$ npm i leaflet
$ npm i react-geocode
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **ZEIT:** The FREE recomended hosting provider is [http://zeit.co/](http://zeit.co/), you can deploy in 1 minutes by typing the following command:
```sh
$ npm i now -g && now
```
✎ Note: If you get asked for credentials you have to type `$ now` after login in.

![Zeit example procedure to deploy](https://ucarecdn.com/4041f971-8dd9-4dc2-84fb-4645ab42c856/)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import { HomePage,RegisterPage,SignInPage,DetailPage,SearchPage } from "./pages";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/signIn" component={SignInPage}/>
					<Route path="/register" component={RegisterPage}/>
					<Route path="/detail/:touristRouteId" component={DetailPage}/>
					<Route path="/search/:keywords?" component={SearchPage}/>
					<Route render={() => <h1>404 页面去火星了</h1>}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

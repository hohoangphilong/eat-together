import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

function setNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params
		})
	);
}

function resetTo(routeName, params) {
	_navigator.dispatch(
		StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName,
					params
				})
			]
		})
	);
}

// add other navigation functions that you need and export them

export default {
	navigate,
	setNavigator,
	resetTo
};

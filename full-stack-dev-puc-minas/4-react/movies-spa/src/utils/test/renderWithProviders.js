import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../store";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
	ui,
	extendedRenderOptions = { route: "/" }
) {
	const {
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	} = extendedRenderOptions;

	const Wrapper = ({ children }) => (
		<BrowserRouter>
			<Provider store={store}>{children}</Provider>
		</BrowserRouter>
	);

	// Return an object with the store and all of RTL's query functions
	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}

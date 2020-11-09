import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };

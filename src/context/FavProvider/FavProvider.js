import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux'; 
import Reducers from "./reducers";
import Store from "./Store";

const FavProvider = ({ children }) => {
    const store = createStore(Reducers, Store);
    return <Provider store={store}>{children}</Provider>;
}

export default FavProvider;

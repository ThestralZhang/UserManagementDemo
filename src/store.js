import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers);
const unsubscribe = store.subscribe(_ => console.log(store.getState()));

export default store;
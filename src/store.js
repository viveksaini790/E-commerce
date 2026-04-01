// import { createStore } from "@reduxjs/toolkit";
// import rootred  from "./Redux/reducers/main";

// const store =createStore(
//     rootred
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootred from "./Redux/reducers/main";

const store = configureStore({
  reducer: rootred
});

export default store;
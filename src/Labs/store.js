import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counter1Reducer from "./a4/ReduxExamples/CounterRedux/counter1Reducer";
import counter2Reducer from "./a4/ReduxExamples/CounterRedux/counter2Reducer";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";

const store = configureStore({
    reducer: {
        helloReducer,
        counter1Reducer: counter1Reducer, 
        counter2Reducer: counter2Reducer,
        addReducer,
        todosReducer
    },

    });
    export default store;
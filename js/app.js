import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import store from "./redux/store";
import Navigator from "./components/Navigator";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));

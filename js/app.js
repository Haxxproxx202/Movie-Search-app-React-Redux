import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import store from "./redux/store";
import Navigator from "./components/Navigator";
import ToWatch from "./containers/ToWatch";
import Watched from "./containers/Watched";
import MovieDetails from "./components/MovieDetails";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/towatch" element={<ToWatch />} />
                    <Route path="/watched" element={<Watched />} />
                    <Route path="/details/:id?" element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));

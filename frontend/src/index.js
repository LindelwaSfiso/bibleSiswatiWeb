import ReactDOM from "react-dom";

import App from "./components/App"
import React from "react";
import HomePage from "./components/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReadBible from "./components/ReadBible";
import AvailableVersions from "./components/AvailableVersions";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import VerseOfTheDayPage from "./components/VerseOfTheDayPage";

ReactDOM.render(
    <App>
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route exact path={"/"} element={<HomePage/>}/>
                <Route exact path={"/versions/"} element={<AvailableVersions/>}/>
                <Route exact path={"/about-us/"} element={<AboutUs/>}/>
                <Route exact path={"/:version/"} element={<ReadBible/>}/>
                <Route exact path={"/verse-of-the-day/"} element={<VerseOfTheDayPage/>}/>
            </Routes>
        </BrowserRouter>
    </App>,
    document.getElementById("app")
)

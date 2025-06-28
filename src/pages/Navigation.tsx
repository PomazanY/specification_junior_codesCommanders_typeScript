import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import SignInPage from "./SignInPage/SignInPage";
import SinglePost from "../modules/SinglePost/SinglePost";

import NotFoundPage from "./NotFoundPage/NotFoundPage";


const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/posts/:id" element={<SinglePost />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Navigation;
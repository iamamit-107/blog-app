import React, { useState } from "react";
import "./App.css";
import { Layout } from "./components/header_Footer";
import { Register, Login } from "./components/auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoardIndex from "./components/dashboard";
import { AddPost, EditPost, PostDetails } from "./components/post";
import Posts from "./data/postData";
import usePostHooks from "./components/hooks/postHooks";

function App() {
    const { posts, deletePost } = usePostHooks(Posts);

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <DashBoardIndex posts={posts} />}
                        />
                        <Route path="/add" component={AddPost} />
                        <Route path="/edit/:id" component={EditPost} />
                        <Route
                            path="/post/:id"
                            render={() => (
                                <PostDetails
                                    posts={posts}
                                    deletePost={deletePost}
                                />
                            )}
                        />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;

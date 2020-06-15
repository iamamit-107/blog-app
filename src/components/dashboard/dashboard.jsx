import React from "react";
import { Typography } from "@material-ui/core";
import Posts from "../post/posts";

const Dashboard = ({ posts }) => {
    return (
        <>
            <Typography variant="h5">Dashboard</Typography>
            <Posts posts={posts} />
        </>
    );
};

export default Dashboard;

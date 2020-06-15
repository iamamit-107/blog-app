import React from "react";
import { Grid } from "@material-ui/core";
import Dashboard from "./dashboard";
import SideBar from "./sidebar";

const DashBoardIndex = ({ posts }) => {
    return (
        <>
            <Grid container>
                <Grid item xs={8}>
                    <Dashboard posts={posts} />
                </Grid>
                <Grid item xs={4}>
                    <SideBar />
                </Grid>
            </Grid>
        </>
    );
};

export default DashBoardIndex;

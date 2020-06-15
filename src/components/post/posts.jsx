import React from "react";
import PostSummary from "./postSummary";
import { Paper, Box } from "@material-ui/core";

const Posts = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Paper elevation={3} key={post.id}>
                    <Box my={3} p={2}>
                        <PostSummary post={post} />
                    </Box>
                </Paper>
            ))}
        </>
    );
};

export default Posts;

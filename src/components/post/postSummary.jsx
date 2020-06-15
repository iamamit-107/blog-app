import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import truncateText from "../../utils/truncate";

const PostSummary = ({ post }) => {
    return (
        <>
            <Box my={2}>
                <Typography variant="h5"> {post.title} </Typography>
            </Box>
            <Box my={2}>
                <Typography variant="body2">
                    {truncateText(post.body)}
                </Typography>
            </Box>
            <Box my={2}>
                <Button
                    component={Link}
                    to={`/post/${post.id}`}
                    color="primary"
                    variant="contained"
                >
                    Read More
                </Button>
            </Box>
        </>
    );
};

export default PostSummary;

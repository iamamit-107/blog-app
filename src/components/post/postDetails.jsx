import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Typography, Button, Box } from "@material-ui/core";

const PostDetails = ({ posts, deletePost }) => {
    const { id } = useParams();
    const history = useHistory();

    const post = posts.find((post) => post.id === Number(id));

    const handleDelete = (id) => {
        deletePost(id);
        history.push("/");
    };

    return (
        <>
            <Typography variant="h4"> {post.title} </Typography>
            <Typography variant="body1" align="justify">
                {post.body}
            </Typography>
            <Typography display="block" variant="caption" align="right">
                Written by Amit, 15th June
            </Typography>
            <Box display="flex">
                <Button
                    component={Link}
                    to={`/edit/${post.id}`}
                    variant="outlined"
                    color="primary"
                >
                    Edit
                </Button>

                <Box ml={2}>
                    <Button
                        onClick={() => handleDelete(post.id)}
                        variant="outlined"
                        color="primary"
                        align="right"
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default PostDetails;

import React from "react";
import { Button, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";

const LoginLinks = () => {
    return (
        <>
            <Button color="inherit" component={Link} to="/add">
                Add Post
            </Button>
            <Button color="inherit">Logout</Button>
            <Fab size="medium">AM</Fab>
        </>
    );
};

export default LoginLinks;

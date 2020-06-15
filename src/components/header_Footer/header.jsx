import React from "react";
import { AppBar, Toolbar, Container, Link } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

import RegisterLinks from "./registerLinks";
import LoginLinks from "./loginLinks";

const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Link
                        component={RouterLink}
                        to="/"
                        variant="h5"
                        color="inherit"
                        underline="none"
                    >
                        Blog App
                    </Link>
                    <RegisterLinks />
                    <LoginLinks />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

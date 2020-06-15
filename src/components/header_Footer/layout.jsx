import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Container } from "@material-ui/core";

const Layout = (props) => {
    return (
        <>
            <Header />
            <Container>{props.children}</Container>
            <Footer />
        </>
    );
};

export default Layout;

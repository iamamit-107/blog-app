import React from "react";
import { withFormik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";

const Register = ({ isSubmitting, values, handleChange, handleBlur }) => {
    return (
        <Form>
            <br />
            <TextField
                type="text"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <ErrorMessage name="firstName" component="div" />

            <br />
            <br />
            <TextField
                type="text"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <ErrorMessage name="lastName" component="div" />

            <br />
            <br />
            <TextField
                type="email"
                label="Email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <ErrorMessage name="email" component="div" />

            <br />
            <br />
            <TextField
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <ErrorMessage name="password" component="div" />

            <br />
            <br />
            <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <ErrorMessage name="confirmPassword" component="div" />

            <br />
            <br />
            <Button
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
            .email("Must be a valid email")
            .required("Email is required"),
        password: Yup.string()
            .min(7, "Password Atleast 7 Characters long")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Password Don't match")
            .required("Confirm Password is required"),
    }),

    handleSubmit(values, { resetForm, setSubmitting }) {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        }, 2000);
    },
})(Register);

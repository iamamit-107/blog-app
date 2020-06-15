import React from "react";
import { withFormik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";

const Login = ({ isSubmitting, values, handleChange, handleBlur }) => {
    return (
        <Form>
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
            email: "",
            password: "",
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Must be a valid email")
            .required("Email is required"),
        password: Yup.string()
            .min(7, "Password Atleast 7 Characters long")
            .required("Password is required"),
    }),

    handleSubmit(values, { resetForm, setSubmitting }) {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        }, 2000);
    },
})(Login);

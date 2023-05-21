import React from "react";
import { Button, Input, Text, Link } from "../../components/basic";
import { Formik } from "formik";
import { validateSignIn } from "../../utils/validation";

function SignIn() {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
                const errors = validateSignIn(values);

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
                isSubmitting,
                isValid,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        width="100%"
                        label="username"
                        placeholder="email or @user"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                    />
                    <Input
                        placeholder="enter password"
                        label="password"
                        name="password"
                        type="password"
                        mt="20px"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                    />
                    <Button
                        type="submit"
                        mt="20px"
                        mb="10px"
                        disabled={!isValid}
                    >
                        <Text>sign in</Text>
                    </Button>
                    <Link to="/auth/resetpassword">
                        <Text>Forgot your password?</Text>
                    </Link>
                </form>
            )}
        </Formik>
    );
}

export default SignIn;

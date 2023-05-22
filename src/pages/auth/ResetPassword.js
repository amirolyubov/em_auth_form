import React from "react";
import { Text, Input, Button } from "../../components/basic";
import { Formik } from "formik";
import { validateResetPassword } from "../../utils/validation";

function ForgotPassword() {
    return (
        <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
                const errors = validateResetPassword(values);

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
                        label="email"
                        placeholder="enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                    />
                    <Button
                        type="submit"
                        mt="20px"
                        mb="10px"
                        disabled={!isValid}
                    >
                        <Text>reset password</Text>
                    </Button>
                </form>
            )}
        </Formik>
    );
}

export default ForgotPassword;

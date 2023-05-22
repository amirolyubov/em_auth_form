import React from "react";
import { Text, Input, Button } from "../../components/basic";
import { Formik } from "formik";
import { validateConfirmPassword } from "../../utils/validation";
import { fakeRequest } from "../../utils/fakeApi";

function ConfirmPassword() {
    return (
        <Formik
            initialValues={{
                password: "",
                passwordConfirm: "",
            }}
            validate={(values) => {
                const errors = validateConfirmPassword(values);

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                fakeRequest().then(() => {
                    setSubmitting(false);
                });
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
                        placeholder="create new password"
                        label="password"
                        name="password"
                        type="password"
                        mt="20px"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                    />
                    <Input
                        placeholder="confirm your password"
                        label="confirm password"
                        name="passwordConfirm"
                        type="password"
                        mt="20px"
                        value={values.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                            touched.passwordConfirm && errors.passwordConfirm
                        }
                    />
                    <Button
                        type="submit"
                        mt="20px"
                        mb="10px"
                        disabled={!isValid}
                        isLoading={isSubmitting}
                    >
                        <Text>sign up</Text>
                    </Button>
                </form>
            )}
        </Formik>
    );
}

export default ConfirmPassword;

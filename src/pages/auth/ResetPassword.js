import React, { useState } from "react";
import { Text, Input, Button, Form, Div } from "../../components/basic";
import { Formik } from "formik";
import { validateResetPassword } from "../../utils/validation";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SuccessPopup } from "../../components";
import { resetPassword } from "../../api";

function ForgotPassword() {
    const [csrfToken] = useOutletContext();

    const navigate = useNavigate();
    const [isSuccessfullyReset, setSuccessfullyReset] = useState(false);

    return (
        <>
            <Formik
                initialValues={{ email: "", csrfToken }}
                validate={(values) => {
                    const errors = validateResetPassword(values);

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    resetPassword(values).then(() => {
                        setSubmitting(false);
                        setSuccessfullyReset(true);

                        setTimeout(() => {
                            alert(
                                "You have been redirected to page with creating new password, with token in uri params. Its like you've got a message with link on your email"
                            );
                            navigate("/auth/confirmpassword?token=1234");
                        }, 2000);
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
                    <Form onSubmit={handleSubmit}>
                        <Div>
                            <Text m="10px 0 0 10px">Reset password</Text>
                            <Input
                                type="hidden"
                                name="csrfToken"
                                value={values.csrfToken}
                            />
                            <Input
                                width="100%"
                                label="email"
                                placeholder="enter your email"
                                name="email"
                                mt={["30px", "20px"]}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                            />
                        </Div>
                        <Button
                            type="submit"
                            mt="30px"
                            mb="10px"
                            disabled={!isValid}
                            isLoading={isSubmitting}
                        >
                            <Text>reset password</Text>
                        </Button>
                    </Form>
                )}
            </Formik>
            {isSuccessfullyReset && <SuccessPopup />}
        </>
    );
}

export default ForgotPassword;

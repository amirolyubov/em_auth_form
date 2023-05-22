import React, { useState } from "react";
import { Text, Input, Button } from "../../components/basic";
import { Formik } from "formik";
import { validateResetPassword } from "../../utils/validation";
import { fakeRequest } from "../../utils/fakeApi";
import { useNavigate } from "react-router-dom";
import { SuccessPopup } from "../../components";

function ForgotPassword() {
    const navigate = useNavigate();
    const [isSuccessfullyReset, setSuccessfullyReset] = useState(false);

    return (
        <>
            <Formik
                initialValues={{ email: "" }}
                validate={(values) => {
                    const errors = validateResetPassword(values);

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    fakeRequest().then(() => {
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
                            isLoading={isSubmitting}
                        >
                            <Text>reset password</Text>
                        </Button>
                    </form>
                )}
            </Formik>
            {isSuccessfullyReset && <SuccessPopup />}
        </>
    );
}

export default ForgotPassword;

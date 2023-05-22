import React, { useEffect, useState } from "react";
import { Button, Input, Text, Link } from "../../components/basic";
import { Formik } from "formik";
import { validateSignIn } from "../../utils/validation";
import { fakeRequest } from "../../utils/fakeApi";
import { ErrorPopup, LoaderPopup, SuccessPopup } from "../../components";
import { useNavigate, useSearchParams } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isSuccessfullySignin, setSuccessfullySignin] = useState(false);
    const [isRequestingTokenValidation, setRequestingTokenValidation] =
        useState(false);
    const [isErrorTokenValidation, setErrorTokenValidation] = useState(false);

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            setRequestingTokenValidation(true);
            fakeRequest().then(() => {
                if (token === "1234") {
                    setRequestingTokenValidation(false);
                    setSearchParams("");
                } else {
                    setErrorTokenValidation(true);
                }
            });
        }
        // sry for that,  i read about useeffect and this deps, think that just for test without warnings its ok :)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors = validateSignIn(values);

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    fakeRequest().then(() => {
                        setSubmitting(false);
                        setSuccessfullySignin(true);
                        setTimeout(() => {
                            navigate("/");
                        }, 2500);
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
                            isLoading={isSubmitting}
                        >
                            <Text>sign in</Text>
                        </Button>
                        <Link to="/auth/resetpassword">
                            <Text>Forgot your password?</Text>
                        </Link>
                    </form>
                )}
            </Formik>
            {isSuccessfullySignin && <SuccessPopup />}
            {isRequestingTokenValidation && <LoaderPopup />}
            {isErrorTokenValidation && (
                <ErrorPopup>
                    Invalid token
                    <br />
                    Please dont modify url from email, or contact our support
                </ErrorPopup>
            )}
        </>
    );
}

export default SignIn;

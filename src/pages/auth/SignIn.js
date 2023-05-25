import React, { useEffect, useState } from "react";
import { Button, Input, Text, Link, Div, Form } from "../../components/basic";
import { Formik } from "formik";
import { validateSignIn } from "../../utils/validation";
import { signIn, validateToken } from "../../api";
import { ErrorPopup, LoaderPopup, SuccessPopup } from "../../components";
import {
    useNavigate,
    useOutletContext,
    useSearchParams,
} from "react-router-dom";

function SignIn(props) {
    const [csrfToken] = useOutletContext();

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
            validateToken(token).then((responce) => {
                if (responce) {
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
                initialValues={{
                    email: "",
                    password: "",
                    csrfToken,
                }}
                validate={(values) => {
                    const errors = validateSignIn(values);

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    signIn(values).then((responce) => {
                        if (responce.error) {
                            setErrors({
                                password: "incorrect email or password",
                                email: "incorrect email or password",
                            });
                        } else if (responce) {
                            setSuccessfullySignin(true);
                            setTimeout(() => {
                                navigate("/");
                            }, 2500);
                        } else {
                            // handle another backend errors here
                        }
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
                    <Form onSubmit={handleSubmit}>
                        <Div>
                            <Text m="10px 0 0 10px">Login to your account</Text>
                            <Input
                                type="hidden"
                                name="csrfToken"
                                value={values.csrfToken}
                            />
                            <Input
                                width="100%"
                                label="user"
                                placeholder="email or @username"
                                mt={["30px", "20px"]}
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
                                id="current-password"
                                autoComplete="current-password webauthn"
                                mt={["30px", "20px"]}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && errors.password}
                            />
                        </Div>
                        <Div>
                            <Button
                                type="submit"
                                mt="30px"
                                mb="10px"
                                disabled={!isValid}
                                isLoading={isSubmitting}
                            >
                                <Text>sign in</Text>
                            </Button>
                            <Link to="/auth/resetpassword">
                                <Text>Forgot your password?</Text>
                            </Link>
                        </Div>
                    </Form>
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

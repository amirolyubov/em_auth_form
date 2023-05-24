import React, { useEffect, useState } from "react";
import { Text, Input, Button, Form, Div } from "../../components/basic";
import { Formik } from "formik";
import { validateConfirmPassword } from "../../utils/validation";
import {
    useNavigate,
    useOutletContext,
    useSearchParams,
} from "react-router-dom";
import { ErrorPopup, LoaderPopup, SuccessPopup } from "../../components";
import { confirmPassword, validateToken } from "../../api";

function ConfirmPassword() {
    const [csrfToken] = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isSuccessfullyChangePassword, setSuccessfullyChangePassword] =
        useState(false);
    const [isErrorTokenValidation, setErrorTokenValidation] = useState(false);
    const [isRequestingTokenValidation, setRequestingTokenValidation] =
        useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get("token");
        if (!token) {
            navigate("/auth");
        } else {
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
                    password: "",
                    passwordConfirm: "",
                    csrfToken,
                }}
                validate={(values) => {
                    const errors = validateConfirmPassword(values);

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    confirmPassword(values).then(() => {
                        setSubmitting(false);
                        setSuccessfullyChangePassword(true);
                        setTimeout(() => navigate("/auth/signin"), 2500);
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
                            <Text m="10px 0 0 10px">Create a new password</Text>
                            <Input
                                type="hidden"
                                name="csrfToken"
                                value={values.csrfToken}
                            />
                            <Input
                                placeholder="create new password"
                                label="password"
                                id="new-password"
                                autoComplete="new-password"
                                name="password"
                                type="password"
                                mt={["30px", "20px"]}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && errors.password}
                                tooltip="use minimum 1 number and 1 capital letter"
                            />
                            <Input
                                placeholder="confirm your password"
                                label="confirm password"
                                name="passwordConfirm"
                                type="password"
                                isConfirmed={
                                    touched.password &&
                                    !errors.password &&
                                    !errors.passwordConfirm
                                }
                                mt={["30px", "20px"]}
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched.passwordConfirm &&
                                    errors.passwordConfirm
                                }
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
                                <Text>sign up</Text>
                            </Button>
                        </Div>
                    </Form>
                )}
            </Formik>
            {isSuccessfullyChangePassword && <SuccessPopup />}
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

export default ConfirmPassword;

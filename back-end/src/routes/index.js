import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testEmailRoute } from './testEmailRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';

export const routes = [
    resetPasswordRoute,
    forgotPasswordRoute,
    verifyEmailRoute,
    testEmailRoute,
    testRoute,
    signUpRoute,
    logInRoute,
    updateUserInfoRoute
];

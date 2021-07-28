import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testEmailRoute } from './testEmailRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute';

export const routes = [
    googleOauthCallbackRoute,
    getGoogleOauthUrlRoute,
    resetPasswordRoute,
    forgotPasswordRoute,
    verifyEmailRoute,
    testEmailRoute,
    testRoute,
    signUpRoute,
    logInRoute,
    updateUserInfoRoute
];

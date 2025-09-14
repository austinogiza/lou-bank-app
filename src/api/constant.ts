const host =
  process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "m"

export const endpoint = `${host}/api`
const authEndpoint = `${host}/auth`
// Authentication start
export const AuthLoginURL = `${authEndpoint}/login`
export const AuthSignupURL = `${authEndpoint}/registration/`
export const ConfirmPasswordURL = `${authEndpoint}/password/reset/confirm/`
export const ResetPasswordURL = `${authEndpoint}/password/reset/`
// Authentication ends

export const AccountsOverviewURL = `${endpoint}/account-overview/`
export const AddUserInfoURL = `${endpoint}/add-account-info/`

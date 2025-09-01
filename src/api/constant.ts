const host =
  process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "m"

const endpoint = `${host}/api`
const authEndpoint = `${host}/auth`

export const AuthLoginURL = `${authEndpoint}/login`
export const AuthSignupURL = `${authEndpoint}/registration`
export const ConfirmPasswordURL = `${authEndpoint}/password/reset/confirm/`
export const ResetPasswordURL = `${authEndpoint}/password/reset/`

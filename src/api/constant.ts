const host =
  process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "m"

const endpoint = `${host}/api`

export const AuthLogin = "/auth/login"

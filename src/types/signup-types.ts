export interface SignupFormDataProps {
  email: string
  password: string
  confirmPassword: string
}

export interface ResetPasswordDataProps {
  password: string
  confirmPassword: string
}

export interface LoginFormDataProps {
  email: string
  password: string
}

export interface ForgotPasswordData {
  email: string
}

export interface AddDataProps {
  first_name: string
  last_name: string
}

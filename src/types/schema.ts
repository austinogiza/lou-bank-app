import * as z from "zod"

export const SignupSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .max(100, "Email must be less than 100 characters"),

    password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(100, "Password must be less than 100 characters"),
    //   .regex(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    //     "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    //   ),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This assigns the error to confirmPassword field
  })

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(100, "Email must be less than 100 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters"),
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
  //   "Password must contain at least one uppercase letter, one lowercase letter, and one number"
  // ),
})

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(100, "Password must be less than 100 characters"),
    //   .regex(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    //     "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    //   ),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This assigns the error to confirmPassword field
  })

// Generate TypeScript types from Zod schemas (RECOMMENDED)
export type SignupFormData = z.infer<typeof SignupSchema>
export type LoginFormData = z.infer<typeof LoginSchema>
export type ResetPasswordData = z.infer<typeof ResetPasswordSchema>

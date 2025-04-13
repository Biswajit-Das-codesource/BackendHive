import { z } from "zod";

export const userValidator = z.object({
  username: z.string().min(6, "username is required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be 6 characters")
    .regex(/[A-Z]/, "password must be one uppercase")
    .regex(/[a-z]/, "password must one lowercase")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});


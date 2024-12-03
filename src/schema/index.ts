import { z } from "zod";

export const loginSchema = z.object({
  uname: z
    .string({ required_error: "Please enter name" })
    .min(1, "Name is required"),
  email: z
    .string({ required_error: "Please enter email" })
    .min(1, "Email is required")
    .email("Please enter a valid email"),
});

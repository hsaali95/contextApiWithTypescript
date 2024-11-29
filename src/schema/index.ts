import { z } from "zod";

export const loginSchema = z.object({
  name: z.string({ required_error: "Please enter name" }),
  email: z.string({ required_error: "Please enter email" }),
});

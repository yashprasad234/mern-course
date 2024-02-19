import {z} from "zod"
export const signupInput = z.object({
    username: z.string().min(4).max(25),
    password: z.string().min(6).max(20)
});

export type SignupParams = z.infer<typeof signupInput>
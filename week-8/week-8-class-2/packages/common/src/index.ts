import {z} from 'zod';

export const signupInput = new z.object({
    username: z.string().min(5).max(30),
    password: z.string().min(6).max(25),
})

export const signupParams = z.infer(signupInput);
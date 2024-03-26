import {z} from 'zod'

const MIN = "should have at least 1 character."

 export const SimpleFormSchema = z.object({
    name:  z.string().min(1, {message: `Name ${MIN}`}),
    surname: z.string().min(1, {message: `Surname ${MIN}`}),
    email: z.string().email({message: "It's not a valid email, make sure you include @"}),
    acceptTerms: z.enum(["ACCEPT", "REJECT"]).refine((val)=> val === "ACCEPT", {message: "You must accept the terms and conditions"})
})

export type SimpleFormType = z.infer<typeof SimpleFormSchema>;

export type FormInputType = HTMLInputElement
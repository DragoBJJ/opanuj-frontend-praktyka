import {z} from 'zod'

const MIN = "should have at least 1 character."
const MAX = "origin should have max 20 characters."
const DATE  = "Date is in incorrect format"

const DATE_REGEX = /^\d{2}-\d{2}-\d{4}$/;

 export const FlightFormSchema = z.object({
    origin:  z.string().min(1, {message: `Origin ${MIN}`}).max(20, {
        message: `Origin ${MAX}`
    }),
    destination: z.string().min(1, {message: `Destination ${MIN}`}).max(20,{message: `Destination ${MAX}`}),
    startDate: z.string().refine((date)=> {
        return DATE_REGEX.test(date);
    },{message: `Start Date ${DATE}`}),
    endDate:  z.string().refine((date)=> {
        return DATE_REGEX.test(date)
    },{message: `End Date ${DATE}`}),
    trip: z.string().min(1,{message: `You must check at least one option`})
})

export type FlightFormFields = z.infer<typeof FlightFormSchema>


export type FormInputType = HTMLInputElement
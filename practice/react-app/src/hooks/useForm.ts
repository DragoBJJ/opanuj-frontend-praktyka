import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { ZodError, ZodSchema } from "zod";


export const useForm =<T extends {acceptTerms: string}> (schema: ZodSchema, initialState: T) => {

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState<string[]>([]);

    const setFormDataByKey  = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
       return setFormData((prev)=> {
            return {...prev, [name]:  value}
        })
    }

    const setAcceptTermsData = (value: SetStateAction<string> ) => {
             setFormData((prev)=> {
                return {...prev, "acceptTerms":  value}
            })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            schema.parse(formData)
            return setErrors([]);
        } catch (error) {     
            if(error instanceof ZodError) {
                return setErrors(error.errors.map(({message})=> message))
            }
            return setErrors(["Please check the form fields"])          
        }
  }

    return {formData, setFormDataByKey,setAcceptTermsData, handleSubmit, errors}
}
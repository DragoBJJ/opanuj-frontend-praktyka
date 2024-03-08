import { ChangeEvent, FormEvent, useState } from "react";
import { FormInputType } from "../types/validate";
import { ZodError, ZodSchema } from "zod";


export const useForm =<T> (schema: ZodSchema, initialState: T) => {

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState<string[]>([]);

    const setFormDataByKey  = (e: ChangeEvent<FormInputType>) => {
        const {value, name} = e.target
       return setFormData((prev)=> {
            return {...prev, [name]:  value}
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          schema.parse(formData)
          return setErrors([]);
        } catch (error) {     
            if(error instanceof ZodError) {
                return setErrors(error.errors.map((error)=> error.message))
            }
            return console.log("error", error)           
        }
  }


    return {formData, setFormDataByKey, handleSubmit, errors}
}
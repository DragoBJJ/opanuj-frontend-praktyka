
import { SimpleType } from "../../types/filter"
import { Input } from "../atoms/Input"
import Switch from "../atoms/Switch"
import { useForm } from "../../hooks/useForm"
import { SimpleFormSchema, SimpleFormType } from "../../types/validate"
import { Button } from "../atoms/Button"



export const SimpleForm = () => {

 const {formData, setFormDataByKey, setAcceptTermsData, handleSubmit, errors} = useForm<SimpleFormType>(SimpleFormSchema, {
    name: "",
    surname: "",
    email: "",
    acceptTerms: "REJECT",
 });

 console.log("errors",errors)

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full h-full">
            <Input type="text" label="Name" placeholder="Name"  name="name" setValue={setFormDataByKey}/>
            <Input type="text" label="Surname" placeholder="Surname"  name="surname"  setValue={setFormDataByKey}/>
            <Input type="email" label="Email" placeholder="drago@gmail.com"  name="email" setValue={setFormDataByKey}/>
            <Switch<SimpleType> label="Accept Terms" stateValue={formData.acceptTerms} setStateValue={setAcceptTermsData} values={["REJECT", "ACCEPT"]}/>
            <Button type="submit" name="Submit" />
            {errors.length  ? errors.map((error)=>  <p className="text-red-500 mt-4">{error}</p>): <></>}
        </form>
    )
}
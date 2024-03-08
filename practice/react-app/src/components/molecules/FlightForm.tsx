import { memo } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useForm } from "../../hooks/useForm";
import { FlightFormFields,FlightFormSchema } from "../../types/validate";

export const FlightForm = memo(() => {

  const {formData, setFormDataByKey, handleSubmit, errors} = useForm<FlightFormFields>(FlightFormSchema, {
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    trip: ""
  });


    return (
<div className="w-full h-full">
<form className="flex flex-col h-full w-full items-center justify-center" id="flight-form" onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Origin"
                value={formData["origin"]}
                name="origin"
                setValue={setFormDataByKey} label="Origin"/>
              <Input
                type="text"
                placeholder="Destination"
                value={formData["destination"]}
                name="destination"
                setValue={setFormDataByKey} label="Destination"/>

                 <div className="flex w-full items-center justify-around max-w-[400px]">                
                        <Input
                            type="radio"
                            label="One way"
                            name="trip"    
                            value="one-way"
                            setValue={setFormDataByKey}
                        />             
                 
                        <Input
                            type="radio"
                            label="Round Trip"
                            name="trip"
                            value="round-trip"
                            setValue={setFormDataByKey}
                        />                   
          </div>
          <Input
                type="text"
                placeholder="01-05-2024"
                value={formData["startDate"]}
                name="startDate"
                setValue={setFormDataByKey} 
                label="Start Date"/>
           <Input
                type="text"
                placeholder="10-05-2024"
                value={formData["endDate"]}
                name="endDate"
                setValue={setFormDataByKey} 
                label="End Date"/>
     
         <Button name="Search" type="submit"/>            
      </form>
        <ul className="mt-4 text-red-500" id="errors min-h-[48px] border-2">
            {errors.length > 0 && errors.map((errMessage)=> {
                return <p key={errMessage}>{errMessage}</p>
            })}
        </ul>
</div>
    );
  });
  
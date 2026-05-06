import { TextInput } from "../../components/ui/form/input";
import { FormLabel } from "../../components/ui/form/label";
import {useForm} from "react-hook-form"
export default function ProductDetail(){
    return <>
    <section>
        <div className="w-full flex flex-col">
            <FormLabel htmlFor="name">Name:</FormLabel>
            <TextInput name="name" type="name" control={control} errMsg={errors?.username?.message}/>

        </div>
    </section>
    </>
}
import type { HTMLInputTypeAttribute, ReactNode } from "react";
import { useController, type  Control, type  FieldValues, type  Path } from "react-hook-form"
interface ITextInputProps<T extends FieldValues>{
    name: Path<T>,
    className?: string,
    type?: HTMLInputTypeAttribute,
    // handleChange: (e:BaseSyntheticEvent)=> void
    control: Control<T>,
    errMsg?:string,
    placeholder?:string
}

// export function TextInput({type="",name,className="",handleChange}:Readonly<ITextInputProps>){
//     return(
//         <input className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`} 
//         id={name}
//         type={type} 
//         name={name} 
//         onChange={handleChange}
//         placeholder={`Enter your ${name}`}
        
        
//         />

//     )
// }

export const TextInput= <T extends FieldValues>({type="",name,className="",control,errMsg="",placeholder="Enter your value"}:Readonly<ITextInputProps<T>>)=>{
    const {field} =useController({
        name:name,
        control:control
    })
    return( 
    <>
        <input 
        className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`} 
          type={type} 
          
          onChange={(e)=>{
            if(type=== 'date'){
              //for date type
              field.onChange(e.target.value? new Date(e.target.value):undefined)
            }else{
              // for other data type
              field.onChange(e.target.value)
            }
          }}  
        
         placeholder={placeholder}
        />
        <span className="text-red-700 text-sm font-light italic">{errMsg}</span>
        </>

    )
}

interface ISelectOption {
  label: ReactNode;
  value: string;
}

interface ISelectInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: ISelectOption[];
  className?: string;
  errMsg?: string;
}

export const SelectInput = <T extends FieldValues>({
  name,
  control,
  options,
  className = "",
  errMsg = "",
}: Readonly<ISelectInputProps<T>>) => {
  const { field } = useController({
    name: name,
    control:control,
  });

  return (
    <>
      <select
        className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`}
        // value={field.value ?? ""}
        // onChange={field.onChange}
        // onBlur={field.onBlur}
        // name={field.name}
        // ref={field.ref}

        {...field}
        >
        <option value="">--Select Any one--</option>
        {
          options && options.map((option: ISelectOption) => {
            return <option key={option.value} value={option.value}>
              {option.label}

          </option>
          })
        }
      </select>
      <span className="text-red-700 text-sm font-light italic">{errMsg}</span>
    </>
  );
};
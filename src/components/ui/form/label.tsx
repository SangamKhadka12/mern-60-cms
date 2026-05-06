import {type ReactNode} from "react"
interface IFormLabelProps{
    htmlFor?:string,
    className?:string,
    children: ReactNode
}
export const FormLabel=({htmlFor="",
    className=" text-lg font-semibold",
    children,}: Readonly<IFormLabelProps>)=>{
    return(
        <label className={`w-full ${className}`} htmlFor={htmlFor}>{children}</label>


    )
} 
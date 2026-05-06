import { type ReactNode } from "react"
interface IpageheadingProps{
    pageTitle?: string | null,
    className?:string,
    children?:ReactNode

}


export const Pageheading=({pageTitle, className="font-semibold text-shadow-lg text-indigo-950",children=""}:Readonly<IpageheadingProps>)=>{
//export const Pageheading=(props:Readonly<{pageTitle: string,className?:"string"}>)=>{

   // const pageTitle =" Login Here";
    return(
        <h1 className={`text-4xl   ${className}`}>
        {pageTitle ?? children
        }
        </h1>
    )
}
export const Subheading=({pageTitle=null, className=" text-shadow-lg text-indigo-950",children="",}:Readonly<IpageheadingProps>)=>{
    
        return(
            <h2 className={`text-3xl font-semibold  ${className}`}>
            {pageTitle ?? children
            }
            </h2>
        )
    }
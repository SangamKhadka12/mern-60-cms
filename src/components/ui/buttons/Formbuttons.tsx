import { type ReactNode } from "react"
interface IButtonProps{
    className?: string,
    type: "submit" |"reset"|"button"
    children: ReactNode,
    disabled?: boolean
}


export const  FormActionButton=({className="",type="submit",children, disabled=false}:Readonly <IButtonProps>)=>{
    return (
        <button className={`rounded-md cursor-pointer transition hover:underline  w-full p-2 items-center justify-center text-white
            ${ type==="reset"
            ?"hover:bg-red-950 bg-red-800"
            :type ==="submit"
             ?"hover:bg-green-950 bg-green-800"
             :"border border-gray-400 hover:bg-gray-300 text-gray-950!"
            } 
         ${className}`} 
         type={type}
         disabled={disabled}>
        {children}
    </button >
    )
}
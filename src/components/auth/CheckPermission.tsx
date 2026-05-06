import { type ReactNode } from "react"
import useAuth from "../../lib/types/hook/useAuth"
import { Navigate } from "react-router"


export interface ICheckPermission{
    children:ReactNode,
    role:"admin"|"user"|"moderator"
}
const Checkpermission=({children,role}:Readonly<ICheckPermission>)=>{
    const {loggedInUserDetail}=useAuth()
   if(!loggedInUserDetail){
    return <Navigate to={"/"}/>
   } else if(loggedInUserDetail&&loggedInUserDetail.role!==role){
    return <Navigate to={"/"+ loggedInUserDetail.role}/>
   }
   else{
    return children
   }

    
}
export default Checkpermission
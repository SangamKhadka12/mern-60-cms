import { FormActionButton } from "../ui/buttons/Formbuttons"
import { TextInput } from "../ui/form/input"
import { FormLabel } from "../ui/form/label"
import { NavLink, useNavigate } from "react-router"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { toast } from "sonner"
import axiosInstance from "../../lib/types/client/axios-client"
import Cookies from "js-cookie"
import type { IUserData } from "../../lib/types/AuthTypes"
import useAuth from "../../lib/types/hook/useAuth"

//regex
//const strongPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W-_]).{8,25}$/
const LoginDTO= z.object({
    username: z.string().min(5,"Username must have more than 5 letters").max(20,"Username must have less than 20 letters"),
    password: z.string().nonempty("Password must not be empty")
   // password:z.string().regex(strongPassword,"Password does not follow strong password policy")
})
export interface ICredentials{
    username: string,
    password:string

 }
export default function LoginForm(){
     const{control, handleSubmit,formState: {errors, isSubmitting}}=useForm<ICredentials>({
        defaultValues:{
        username:"",
        password:""
     },
         resolver:zodResolver(LoginDTO)

         
     })
     const{login}= useAuth()
     const navigate =useNavigate()

     const handleLogin= async (data: ICredentials)=>{
        
        //TODO:API Call
        try{
            const loggedInUserDetail= await login(data) as IUserData

            // //public/open api
            // const loginData = await axiosInstance.post("auth/login",{...data, expiresInMins: 180}) as{accessToken:string , refreshToken:string}
           
            // //console.log(response.data)
            // Cookies.set("_at_60",loginData.accessToken,{
            //     expires:1,
            //     sameSite:"lax",
            //     secure:true,
            // })
            // Cookies.set("_rt_60",loginData.refreshToken,{
            //     expires:1,
            //     sameSite:"lax",
            //     secure:true,
            // })
            // console.log(loginData)

            // //call user detail api(private api)
            // const loggedInUserDetail = await axiosInstance.get("auth/me" ) as IUserData
            navigate("/"+ loggedInUserDetail.role)
            console.log(loggedInUserDetail)




         // // const response=await fetch("https://dummyjson.com/auth/login",{
            // //     method:"POST",
            // //     headers:{
            // //         "Content-Type":"application/json",
            // //         //Authorization
            // //     },
            // //     body:JSON.stringify({...data,expiresInMins:180}),


            // })
            // const loginData= await response.json()
            // console.log(loginData)

        }
        catch(exception){
            //console.log(exception)
            toast.error("Error while logging in",{
                description: "Check your credentials before request"
            })
        }
     }   
     console.log(errors)

// 
    // const handleChange=(e:BaseSyntheticEvent)=>{
    //     const{value,name}=e.target;
    //     setCredentials({
    //         ...credentials,
    //         [name]:value,
    //     })
    // }
    // const handleLogin= async(e: BaseSyntheticEvent)=>{
    //     e.preventDefault()  // tp halt the default action of form submission
    //     console.log(credentials)
    //     //TODO: validation
    //     const validData= await LoginDTO.parseAsync(credentials)
    //     console.log(validData)
    //     TODO: API integrate here 
    // }
    
    return(
        <form onSubmit={handleSubmit(handleLogin)} className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-col" >
              <FormLabel htmlFor="username">Username:</FormLabel>
              <TextInput name="username" type="username" control={control} errMsg={errors?.username?.message}/>
            </div>
            
          
            <div className="w-full flex flex-col">
            <FormLabel  htmlFor="password" >Password:</FormLabel>
            <TextInput name="password" type="password" control={control} errMsg={errors?.password?.message}/>
            </div>
            <div className="w-full flex flex-col">
            <NavLink
             className="text-sm text-green-700 underline hover:scale-105 hover:text-green-800 transition-all italic"
            to="/forget-password">Forgot Password?
            </NavLink>
            </div>

           <div className="w-full flex gap-3 ">
            <FormActionButton disabled={isSubmitting} type="reset">Cancel</FormActionButton>
            <FormActionButton  disabled={isSubmitting}type="submit"> Submit</FormActionButton>
           </div>
        </form>
    )
} 
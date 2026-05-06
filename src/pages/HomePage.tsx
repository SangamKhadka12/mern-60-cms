import LoginForm from "../components/auth/LoginForm";
import { Pageheading } from "../components/ui/typography/Title";
import logo from "../assets/images/logo.png";
 
export default function HomePage(){
  
    return(
        <section className=" bg-gray-100 w-full h-screen flex items-center justify-center " >
               <div className='w-1/3 bg-white shadow-lg flex flex-col gap-5 rounded-md p-5 '>
               <div className="flex flex-col w-full items-center justify-center">
               <div className="w-15">
               <img  
                src={logo} 
                alt="Logo" 
                className="rounded-full"/>
               </div>
               <Pageheading className="font-semibold text-shadow-lg text-teal-950"> <em>Login Here</em></Pageheading>
               
               </div>
             
              <LoginForm/>
              
               </div>
        </section>

        
    )
 }
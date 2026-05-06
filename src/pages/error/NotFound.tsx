import { Icon } from "@iconify/react"
import { Subheading } from "../../components/ui/typography/Title"
import { Link, NavLink } from "react-router"
export default function NotFound({url="/",linkText="Go Back" }:Readonly<{url?:string, linkText?:string}>){
    return(
        <section className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white w-full lg:w-5xl p-10 rounded-lg shadow-2xl shadow-red-100 flex flex-col gap-5 ">
               <div className="flex w-full items-center justify-center flex-col gap-5">
               <Icon
                icon={"material-symbols:warning-sharp"} className="size-50 text-red-800"
                />
                <Subheading className="text-red-700 text-shadow-lg text-shadow-red-100">404! Not Found</Subheading>
                </div> 
                <p className="text-lg text-center text-red-900 font-semibold ">
                Looks like you took a wrong turn—the page you’re looking for doesn’t exist.
                If it ever did, it has since vanished into the internet’s witness protection program.
                </p>
                <NavLink to={url}className={`w-full flex p-3 items-center justify-center border border-red-800 rounded-full text-red-800 text-lg font-semibold hover:bg-red-50 hover:scale-98 transition duration-300`}>
                <Icon icon={"ic:round-arrow-back"} className="text-red-800 size-7"/> {linkText}

                </NavLink>
           

            </div>

        </section>
    )
}
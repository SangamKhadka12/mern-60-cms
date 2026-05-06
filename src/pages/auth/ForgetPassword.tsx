import { NavLink } from "react-router";
import logo from "../../assets/images/logo.png"
import { FormActionButton } from "../../components/ui/buttons/Formbuttons";
import { TextInput } from "../../components/ui/form/input";
import { FormLabel } from "../../components/ui/form/label";
import { Pageheading } from "../../components/ui/typography/Title";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgetPasswordDTO = z.object({
  username: z.string().nonempty()
})

export type IForgetPasswordData = z.infer<typeof ForgetPasswordDTO>

export default function ForgetPasswordPage() {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      username: ""
    },
    resolver: zodResolver(ForgetPasswordDTO)
  })
  
  const formSubmitEvent = (data: IForgetPasswordData) => {
    console.log(data);
  };

  return (
    <>
      <section className="bg-gray-100 flex w-full h-screen items-center justify-center">
        <div className="bg-white p-10 w-2xl flex justify-center flex-col gap-5 items-center">
          <img src={logo} alt="logo" className="size-25 rounded-full" />

          <Pageheading pageTitle={"Forget Password?"}></Pageheading>

          <form onSubmit={handleSubmit(formSubmitEvent)} className="flex flex-col w-full gap-5">
            <div className="flex w-full flex-col">
              <FormLabel htmlFor="username">User Name: </FormLabel>
              <TextInput type="text" name="username" control={control}/>
            </div>

            <div className="flex w-full">
              <FormActionButton type="submit">Send Request</FormActionButton>
            </div>

            <div>
              <NavLink className="w-full flex items-center justify-center border border-green-500 p-3 rounded-full text-lg font-semibold hover:text-green-700 hover:scale-98 transition hover:bg-green-50" to="/">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
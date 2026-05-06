import { useForm } from "react-hook-form"
import { FormLabel } from "../../components/ui/form/label";
import { SelectInput, TextInput } from "../../components/ui/form/input";
import { Pageheading } from "../../components/ui/typography/Title";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormActionButton } from "../../components/ui/buttons/Formbuttons";
import { type IUserData, UserCreateDTO } from "../../lib/types/AuthTypes";
import axiosInstance from "../../lib/types/client/axios-client";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function UserCreate() {
  const {control,handleSubmit,formState: { errors, isSubmitting},} = useForm<IUserData>({
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      username: undefined,
      password: undefined,
      confirmPassword: undefined,
      gender: undefined,
      birthDate: undefined,
      //university: undefined,
      //address: undefined,
      role: "user", // admin, user, moderator
      company: {
        department: undefined,
        name: undefined,
        title: undefined,
      },
    },
    resolver: zodResolver(UserCreateDTO)
  });
    const navigate= useNavigate()
  const userRegister = async(data: IUserData) => {
    // form Submit to API 
      try{
        await axiosInstance.post("/users/add",data)
        toast.success("User Registered!",{
          description: "Your User has been registered successfully"
        })
        navigate("/admin/users")
       
      }catch(exception){
        console.log(exception)
      }
  }
  

  return (
    <section className="w-full mx-5 auto flex flex-col gap-3 bg-gray-200 shadow rounded-md p-5 my-5">
      <div className="border-b border-b-indigo-900 pb-5">
        <Pageheading>Register User</Pageheading>
      </div>

      <form
        onSubmit={handleSubmit(userRegister)}
        className="flex flex-col w-full gap-3"
      >
        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-col">
            <FormLabel htmlFor="firstName">First Name: </FormLabel>
            <TextInput
              name="firstName"
              control={control}
              errMsg={errors?.firstName?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <FormLabel htmlFor="lastName">Last Name: </FormLabel>
            <TextInput
              name="lastName"
              control={control}
              errMsg={errors?.lastName?.message}
            />
          </div>
        </div>

        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-col">
            <FormLabel htmlFor="email">Email: </FormLabel>
            <TextInput
              name="email"
              type="email"
              control={control}
              errMsg={errors?.email?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <FormLabel htmlFor="username">Username: </FormLabel>
            <TextInput
              name="username"
              control={control}
              errMsg={errors?.username?.message}
            />
          </div>
        </div>

        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-col">
            <FormLabel htmlFor="password">Password: </FormLabel>
            <TextInput
              name="password"
              type="password"
              control={control}
              errMsg={errors?.password?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <FormLabel htmlFor="confirmPassword">Confirm Password: </FormLabel>
            <TextInput
              name="confirmPassword"
              type="password"
              control={control}
              errMsg={errors?.confirmPassword?.message}
            />
          </div>
        </div>

        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-col">
            <FormLabel htmlFor="birthDate">Date of Birth: </FormLabel>
            <TextInput
              name="birthDate"
              type="date"
              control={control}
              errMsg={errors?.birthDate?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <FormLabel htmlFor="gender">Gender: </FormLabel>
            <SelectInput
              name="gender"
              control={control}
              options={[
                { label: "Male", value: "male" },
                { label: "FeMale", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
          </div>
        </div>

        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-col">
            <FormLabel htmlFor="company.name">Company Name: </FormLabel>
            <TextInput
              name="company.name"
              control={control}
              errMsg={errors?.company?.name?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <FormLabel htmlFor="company.title">Company Designation: </FormLabel>
            <TextInput
              name="company.title"
              control={control}
              errMsg={errors?.company?.title?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <FormLabel htmlFor="company.department">Department: </FormLabel>
            <TextInput
              name="company.department"
              control={control}
              errMsg={errors?.company?.department?.message}
            />
          </div>
        </div>

        <div className="w-full flex gap-3">
          <FormActionButton disabled={isSubmitting} type="reset">
            Cancel
          </FormActionButton>
          <FormActionButton disabled={isSubmitting} type="submit">
            Register
          </FormActionButton>
        </div>
      </form>
    </section>
  );
}
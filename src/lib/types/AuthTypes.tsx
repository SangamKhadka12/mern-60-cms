import z from "zod";
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W-_]).{8,25}$/;

export const UserCreateDTO = z
  .object({
    firstName: z.string("First name is required").min(2, "First name must be of atleast 2 character long").max(15),
    lastName: z.string().min(2).max(15),
    email: z.email().nonempty(),
    username: z.string().min(5).max(20),
    password: z.string().regex(strongPassword), // validate this with regex
    confirmPassword: z.string().regex(strongPassword), // must be same as that of password,
    // gender: z.string().nonempty(), // regex
    // gender: z.enum(["male", "female", "other"]).nonoptional(), // regex
    gender: z.string().regex(/^(male|female|other)$/),
    birthDate: z.date().max(new Date()),
    //university: z.string().nonempty(),
    //address: z.string().nonempty(),
    // role: z.string().nonempty(), // regex
    // role: z.enum(["admin", "moderator", "user"]).nonoptional(), // regex
    role: z.string().regex(/^(admin|moderator|user)$/),
    company: z.object({
      department: z.string().nonempty(),
      name: z.string().nonempty(),
      title: z.string().nonempty(),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesnot match",
    path: ["cofirmPassword"],
  });

// export interface IUserData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
//   password: string;
//   gender: "male" | "female" | "other";
//   birthDate: Date;
//   university: string;
//   address: string;
//   confirmPassword: "";
//   role: "user" | "admin" | "moderator"; // admin, user, moderator
//   company: {
//     department: string;
//     name: string;
//     title: string;
//   };
// }

export type IUserData = z.infer<typeof UserCreateDTO> & {
  image?: string;
  id?: number;
  address?:{
    address: string,
    city:string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates:{
      lat:number;
      lng:number;
    }
    country:string
  }
};
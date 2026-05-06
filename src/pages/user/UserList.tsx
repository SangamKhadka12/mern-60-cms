
import { NavLink, useNavigate } from "react-router";
import { Pageheading, Subheading } from "../../components/ui/typography/Title";
import { type MouseEvent, useEffect } from "react";
// import { toast } from "sonner";
// import axiosInstance from "../../lib/types/client/axios-client";
import  type {  IUserData } from "../../lib/types/AuthTypes";
import  { type AppDispatch,type RootState } from "../../lib/types/store/store";
import { getAllUsers, getUserDetail } from "../../lib/reducer/UserReducer";
import { useDispatch, useSelector } from "react-redux";
export default function UserList() {
  //const[userList,setUserList]=useState<Array<IUserData>>();
  const userList = useSelector((root:RootState)=>{
     return root.user.allUsers as unknown as Array<IUserData>
  });
const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate();
  // const getAllUsers=async()=>{
  //   try{
  //     const response= await axiosInstance.get('/users',{
  //       params:{
  //         limit:20,
  //         skip: 0
  //       }
  //   }) as { users:Array<IUserData>, skip:number,limit:number,total:number}
  //   //setUserList(response.users)
    
    
  //   }
  //   catch(exception){
  //     console.log(exception)
  //     toast.error("Error while fetching users..",{
  //       description:"There was a problem while fetching user list.Please clear the cache and try again"
  //     })
      
  //   }
  // };
  useEffect(() => {
    dispatch(getAllUsers())
    
   
  }, [])
 



  return (
    <>
      <section className="flex p-5 bg-white w-full flex-col gap-5">
        <div className="flex justify-between w-full">
          <Pageheading>User Listing</Pageheading>
          <NavLink className={'w-50 p-2 bg-teal-800 text-white rounded-lg flex justify-center items-center transition hover:bg-teal-900 hover:scale-103 hover:underline'} to="/admin/user/create">Add User</NavLink>
        </div>

        <div className="flex w-full h-[65vh] overflow-y-scroll ">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-950 text-white">Name</th>
                <th className="border p-2 bg-gray-950 text-white">Email</th>
                <th className="border p-2 bg-gray-950 text-white">Role</th>
                <th className="border p-2 bg-gray-950 text-white">Gender</th>
                <th className="border p-2 bg-gray-950 text-white">Address</th>
                <th className="border p-2 bg-gray-950 text-white">Company</th>
                <th className="border p-2 bg-gray-950 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userList&& userList.map((user:IUserData, indx:number)=>{
                  return(
                  <tr key={indx}className="bg-gray-100">
                  <td className="border px-3">{user.firstName+" "+user.lastName}</td>
                  <td className="border px-3">{user.email}</td>
                  <td className="border px-3">{user.role}</td>
                  <td className="border px-3">{user.gender}</td>
                  <td className="border px-3">
                    {user.address ? user.address.address + 
                    "," +
                    user.address.city +
                    "," +
                    user.address.country: ""
                    }
                  </td>
                  <td className="border px-3">
                    <div>
                      <Subheading className="text-xl!">
                        {user.company.name}
                      </Subheading>
                      <p className="text-sm font-semibold">{user.company.title},{user.company.department}</p>
                    </div>
                  </td>
                  <td className="border px-3">
                    <NavLink className={'text-teal-700 underline text-sm'} 
                    to={'/admin/user/'+user.id}
                    onClick={(e: MouseEvent<HTMLAnchorElement>)=>{
                      e.preventDefault()
                      dispatch(getUserDetail({userId:`${user.id}`}))
                      navigate(`/admin/user/${user.id}`)
                    }}
                    >
                      View
                    </NavLink>
                     / Edit / Delete</td>
                </tr>
                  )
                })
              }
             
              {/* <tr className="bg-white">
                <td className="border px-3"> Ramesh</td>
                <td className="border px-3">sandesh@broadwayinfosys.com</td>
                <td className="border px-3">Admin</td>
                <td className="border px-3">Male</td>
                <td className="border px-3">Kathmandu, Tinkune</td>
                <td className="border px-3">
                  <div>
                    <Subheading className="text-xl!">
                      Broadway Infosys
                    </Subheading>
                    <p className="text-sm font-semibold">Tinkune kathmandu</p>
                  </div>
                </td>
                <td className="border px-3">
                  <NavLink className={'text-teal-700 underline text-sm'} to='/admin/user/user-ramesh'>
                    View
                  </NavLink>
                   / Edit / Delete</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3">Suresh</td>
                <td className="border px-3">sandesh@broadwayinfosys.com</td>
                <td className="border px-3">Admin</td>
                <td className="border px-3">Male</td>
                <td className="border px-3">Kathmandu, Tinkune</td>
                <td className="border px-3">
                  <div>
                    <Subheading className="text-xl!">
                      Broadway Infosys
                    </Subheading>
                    <p className="text-sm font-semibold">Tinkune kathmandu</p>
                  </div>
                </td>
                <td className="border px-3">
                  <NavLink className={'text-teal-700 underline text-sm'} to='/admin/user/suresh'>
                    View
                  </NavLink>
                   / Edit / Delete</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
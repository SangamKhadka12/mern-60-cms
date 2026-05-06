import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams,  } from "react-router"
import { getUserDetail } from "../../lib/reducer/UserReducer";
import  { type AppDispatch } from "../../lib/types/store/store";
import type { IUserData } from "../../lib/types/AuthTypes";
import type { RootState } from "../../lib/types/store/store";
import { useSelector } from "react-redux";
export default function UserDetail() {
  const params = useParams();
   //console.log(params)
   const dispatch = useDispatch<AppDispatch>();
   const userDetail = useSelector((root:RootState)=>{
    return root?.user?.userDetail as unknown as IUserData
   });
   useEffect(()=>{
    dispatch(getUserDetail({userId:params.username as string}))
    },[params.username])
   
   return(
    <>
    <p>
        Params:{userDetail?.firstName}
    </p>
    </>
   )
}
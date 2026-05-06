import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "../pages/HomePage"

import ForgetPasswordPage from "../pages/auth/ForgetPassword"

import NotFound from "../pages/error/NotFound"
import UserLayout from "../pages/layouts/UserLayout"
import AdminLayout from "../pages/layouts/AdminLayout"
import UserCreate from "../pages/user/Usercreate"
import UserList from "../pages/user/UserList"
import UserDetail from "../pages/user/UserDetail"
import AdminDashboard from "../pages/dashboard/AdminDashboard"
import  Checkpermission from "../components/auth/CheckPermission"
import ProductList from "../pages/ProductListing/productList"
import ProductDetail from "../pages/ProductListing/productDetail"
const routerConf = createBrowserRouter([
    {path:"/", element:<HomePage/>},
    {path:"/forget-password", Component: ForgetPasswordPage},
    {path:"/admin", element:( <Checkpermission role='admin'>
        <AdminLayout />
    </Checkpermission>
    ),
        children:[
        {index:true, element:<AdminDashboard /> },
        {path:"users",element: <UserList />},
        {path:"user/:username",element:<UserDetail />},
        {path:"user/create", element: <UserCreate />},
        {path:"product",element:<ProductList/>,children:[
            {index:true, element: <>Product Detail</>},
            {path:"detail", element:<ProductDetail/>}
        ]}
    ]},
    {path:"/user",element:<Checkpermission role="user">
        <UserLayout/>
    </Checkpermission>,
    children:[
        {index:true, element:<>Dashboard (KPI)</>},
        {path:"profile",element:<>User Profile</>},
        {path:"*",element:<NotFound/>},
       
    ],
   },
   {path:"/moderator",element:<Checkpermission role="moderator">
    <UserLayout/>
   </Checkpermission>,children:[
    {index:true, element:<>Dashboard (KPI)</>},
    {path:"profile",element:<>User Profile</>},
    {path:"*",element:<NotFound/>},
   
],
},


   {path:"*",element:<NotFound />},
  
])

export default function RouterConfig(){
    return <RouterProvider router={routerConf}/>
}
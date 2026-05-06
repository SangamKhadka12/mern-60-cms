import { createContext } from "react";
import type { ICredentials } from "../../../components/auth/LoginForm";
import type { IUserData } from "../AuthTypes";

//type declaration for the context
export interface IAuthContext{
    login(credentials: ICredentials): Promise<IUserData| void>,
    getLoggedInUser(): Promise<IUserData|void>,
    loggedInUserDetail: IUserData | null,
}
//default value passed to context
const AuthContext= createContext<IAuthContext>({
    async login(){},
    async getLoggedInUser() {},
    loggedInUserDetail:null

})

export default AuthContext
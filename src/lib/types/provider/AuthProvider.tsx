import { useEffect, useState, type ReactNode } from "react"
import AuthContext from "../context/AuthContext"
import { type IUserData } from "../AuthTypes"
import type { ICredentials } from "../../../components/auth/LoginForm"
import axiosInstance from "../client/axios-client"
import Cookies from "js-cookie"

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [loggedInUserDetail, setLoggedInUserDetail] = useState<IUserData | null>(null)
    const [loading, setLoading] = useState(true)

    const getLoggedInUser = async (): Promise<IUserData | void> => {
        try {
            const userDetail = await axiosInstance.get("/auth/me") as IUserData
            setLoggedInUserDetail(userDetail)
            return userDetail
        } catch (exception) {
            console.log(exception)
            throw exception
        } finally {
            setLoading(false)
        }
    }

    const login = async (credentials: ICredentials): Promise<IUserData | void> => {
        const loginData = (await axiosInstance.post("/auth/login", {
            ...credentials,
            expiresInMins: 180,
        })) as { accessToken: string; refreshToken: string }

        Cookies.set("_at_60", loginData.accessToken, {
            expires: 1,
            sameSite: "lax",
            secure: true,
        })
        Cookies.set("_rt_60", loginData.refreshToken, {
            expires: 1,
            sameSite: "lax",
            secure: true,
        })

        return await getLoggedInUser()
    }

    useEffect(() => {
        const token = Cookies.get("_at_60")
        if (token) {
            getLoggedInUser().catch(() => undefined)
        } else {
            setLoading(false)
        }
    }, [])

    if (loading) {
        return <><p>Loading...</p></>
    }

    return (
        <AuthContext.Provider value={{
            login : login,
            getLoggedInUser: getLoggedInUser,
            loggedInUserDetail: loggedInUserDetail,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
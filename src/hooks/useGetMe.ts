import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/Context";

interface UserProps {
    name: string,
    email: string,
    phone: string;
    role: string;

}
export const useGetAlMe = () => {
    const context = useContext(AuthContext)
    // console.log(context)
    // if (!context) {
    //     return "error"
    // }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user  } = context as any
    const frontendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!frontendUrl) {
        throw new Error("VITE_FRONTEND_URL is not defined in .env");
    }
    const { isPending, error, data, refetch } = useQuery<UserProps>({
        queryKey: ['me', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${frontendUrl}/user/me?email=${user?.email}`, { withCredentials: true })
            return res.data
        },
        initialData: {
            name: '',
            email: '',
            phone: '',
            role: ''
        }

    })

    return { data, isPending, error, refetch }

}
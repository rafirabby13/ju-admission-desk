import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllcategories = () => {
    const frontendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!frontendUrl) {
        throw new Error("VITE_FRONTEND_URL is not defined in .env");
    }
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get(`${frontendUrl}/admin/categories`, { withCredentials: true })
            return res.data
        },
        initialData: []

    })

    return { data, isPending, error, refetch }

}
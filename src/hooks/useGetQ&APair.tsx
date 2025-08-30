import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAlllQAns = () => {
    const frontendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!frontendUrl) {
        throw new Error("VITE_FRONTEND_URL is not defined in .env");
    }
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['q_a'],
        queryFn: async () => {
            const res = await axios.get(`${frontendUrl}/admin/qa-pairs`, { withCredentials: true })
            return res.data
        },
        initialData: []

    })

    return { data, isPending, error, refetch }

}
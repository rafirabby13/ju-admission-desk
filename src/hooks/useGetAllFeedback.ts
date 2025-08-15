import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAlFeedback = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/feedback`, { withCredentials: true })
      return res.data
    },
    initialData: []

  })

  return { data, isPending, error, refetch }

}
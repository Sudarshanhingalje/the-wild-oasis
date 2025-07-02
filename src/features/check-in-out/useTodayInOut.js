import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayInOut() {
  const { isLoading, data: activities } = useQuery({
    queryKey: ["activity"],
    queryFn: getStaysTodayActivity,
  });
  return { isLoading, activities };
}

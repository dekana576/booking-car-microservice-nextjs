import { getOrderList } from "@/services/actions/order.actions";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderList = () => {

  return useQuery({
    queryKey: ["get-order-list"],
    queryFn: () => getOrderList(),
    refetchOnMount: true,
  });
};

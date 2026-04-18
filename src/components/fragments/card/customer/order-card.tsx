import Button from "@/components/ui/button/button";
import Link from "next/link";
import {useDeleteOrder} from "@/features/order/use-delete-order";
import {IOrder} from "@/types/order.types";

interface IOrderCardProps {
    order: IOrder;
}

export default function OrderCard({order} : IOrderCardProps) {
  const { handleDelete, isLoading} = useDeleteOrder();
    return (
        <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">{order.customerId}</p>
        <p className="text-sm">Pickup: {order.pickup}</p>
        <p className="text-sm">Destination: {order.destination}</p>
        <p className="text-sm">Status: {order.status}</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/customer/order/${order.id}`}>
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/customer/edit/${order.id}`}>
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
          onClick={() => confirm("Are you sure?") && handleDelete(order.id)}
          disabled={isLoading}
        >
          Delete
        </Button>
      </div>
    </div>
    )
}
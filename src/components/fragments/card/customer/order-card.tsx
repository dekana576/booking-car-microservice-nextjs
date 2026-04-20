import Button from "@/components/ui/button/button";
import Link from "next/link";
import {useDeleteOrder} from "@/features/order/use-delete-order"; //Import the useDeleteOrder hook to handle order deletion logic
import {IOrder} from "@/types/order.types"; //Import the IOrder interface to define the shape of the order object being passed as a prop

// Define the props for the OrderCard component, which includes an order object of type IOrder

interface IOrderCardProps {
    order: IOrder;
}

export default function OrderCard({order} : IOrderCardProps) { //Destructure the order prop to access its properties within the component
  const { handleDelete, isLoading} = useDeleteOrder(); //Use the useDeleteOrder hook to get the handleDelete function and isLoading state for managing order deletion and loading state
    return (
        <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">{order.customerId}</p> {/* Display the customer ID associated with the order */}
        <p className="text-sm">Pickup: {order.pickup}</p> {/* Display the pickup location of the order */}
        <p className="text-sm">Destination: {order.destination}</p> {/* Display the destination of the order */}
        <p className="text-sm">Status: {order.status}</p> {/* Display the status of the order */}
      </div>

      <div className="flex gap-2">
        <Link href={`/customer/order/${order.id}`}> {/* Link to the order detail page using the order's ID */}
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/customer/edit/${order.id}`}> {/* Link to the order edit page using the order's ID */}
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
          onClick={() => confirm("Are you sure?") && handleDelete(order.id)} //Call the handleDelete function with the order's ID when the delete button is clicked, after confirming the action with the user
          disabled={isLoading} //Disable the delete button while the deletion process is loading to prevent multiple clicks
        >
          Delete
        </Button>
      </div>
    </div>
    )
}
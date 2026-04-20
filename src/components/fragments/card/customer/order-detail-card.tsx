import { formatDate } from "@/libs/utils/format-date"; //Import the formatDate utility function to format the createdAt date of the order
import { IOrder } from "@/types/order.types"; //Import the IOrder interface to define the shape of the order object being passed as a prop

// Define the props for the OrderDetailCard component, which includes an order object of type IOrder
interface IOrderCardProps {
  order: IOrder;
}

export default function OrderDetailCard({ order }: IOrderCardProps) { //Destructure the order prop to access its properties within the component
  return (
    <div className="w-full border rounded-lg p-6 bg-white shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{order.customerId}</h3> {/* Display the customer ID associated with the order */}
          <p className="text-sm text-gray-500">ID: {order.id}</p> {/* Display the order's ID */}
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            order.status === "COMPLETED"
              ? "bg-green-100 text-green-700"
              : order.status === "PROCESS"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-700"
          }`} //Display the order's status with different background and text colors based on the status value (e.g., green for COMPLETED, yellow for PROCESS, gray for others)
        >
          {order.status} {/* Display the order's status text within the styled span element */}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Pickup</p>
          <p className="font-medium">{order.pickup}</p> {/* Display the pickup location of the order */}
        </div>

        <div>
          <p className="text-gray-500">Destination</p>
          <p className="font-medium">{order.destination}</p> {/* Display the destination of the order */}
        </div>

      </div>

      <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
        <p>Created At: {formatDate(order.createdAt)}</p> {/* Display the order's creation date formatted using the formatDate utility function */}
      </div>
    </div>
  );
}

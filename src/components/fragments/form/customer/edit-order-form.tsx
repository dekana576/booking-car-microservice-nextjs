"use client";
import Button from "@/components/ui/button/button";
import { useUpdateOrder } from "@/features/order/use-update-user"; // Import the useUpdateOrder hook to handle the form logic for updating an existing order
import {
  ORDER_STATUS_OPTIONS
} from "@/libs/constant/options"; // Import the ORDER_STATUS_OPTIONS constant to populate the options for the order status select field in the form
import { IOrder } from "@/types/order.types"; // Import the IOrder interface to define the shape of the order object being passed as a prop to the EditOrderForm component

// Define the props for the EditOrderForm component, which includes an order object of type IOrder
interface IEditOrderFormProps {
  order: IOrder;
}

export default function EditOrderForm({ order }: IEditOrderFormProps) { // Destructure the order prop to access its properties within the component
  const { formik, isLoading } = useUpdateOrder(order); // Use the useUpdateOrder hook, passing the order object as an argument, to get the formik object for managing form state and validation, and the isLoading state for managing the loading state of the form submission

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2"> {/* Render a form element with an onSubmit handler that calls formik.handleSubmit, and apply styling classes for layout and spacing */}
      <div>
        <label className="text-sm font-medium">Role</label>
        <select
          name="status"
          onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the select value changes
          value={formik.values.status} // Set the value of the select to formik.values.status to bind the select value to the form state
          className="w-full mt-1 p-1.5 border rounded"
        >
          {ORDER_STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))} {/* Map through the ORDER_STATUS_OPTIONS array to render an option element for each order status, setting the key and value of each option to the status string, and displaying the status string as the option text */}
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}> {/* Render a submit button that is disabled while the form submission is loading, and display "Updating..." text while loading and "Update" text when not loading */}
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </div>
    </form>
  );
}

"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text"; // Import the ErrorText component to display validation error messages
import { useCreateOrder } from "@/features/order/use-create-order"; // Import the useCreateOrder hook to handle the form logic for creating a new order

export default function CreateOrderForm() {
  const { formik, isLoading } = useCreateOrder(); // Use the useCreateOrder hook to get the formik object for managing form state and validation, and the isLoading state for managing the loading state of the form submission

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2"> {/* Render a form element with an onSubmit handler that calls formik.handleSubmit, and apply styling classes for layout and spacing */}
      <div>
        <label className="text-sm font-medium">Customer ID</label>
        <input
          type="number"
          name="customerId"
          onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.customerId} // Set the value of the input to formik.values.customerId to bind the input value to the form state
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter customer ID..."
        />
        {formik.touched.customerId && formik.errors.customerId && (
          <ErrorText message={formik.errors.customerId} />
        )} {/* Conditionally render the ErrorText component to display the validation error message for the customerId field if it has been touched and has an error */}
      </div>

      <div>
        <label className="text-sm font-medium">Pickup</label>
        <input
          type="text"
          name="pickup"
          onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.pickup} // Set the value of the input to formik.values.pickup to bind the input value to the form state
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter pickup location..."
        />
        {formik.touched.pickup && formik.errors.pickup && (
          <ErrorText message={formik.errors.pickup} />
        )} {/* Conditionally render the ErrorText component to display the validation error message for the pickup field if it has been touched and has an error */}
      </div>
      <div>
        <label className="text-sm font-medium">Destination</label>
        <input
          type="text"
          name="destination"
          onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.destination} // Set the value of the input to formik.values.destination to bind the input value to the form state
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter destination location..."
        />
        {formik.touched.destination && formik.errors.destination && (
          <ErrorText message={formik.errors.destination} />
        )} {/* Conditionally render the ErrorText component to display the validation error message for the destination field if it has been touched and has an error */}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}> {/* Render a submit button that is disabled while the form submission is loading, and display "Create..." text while loading and "Create" text when not loading */}
          {isLoading ? "Create..." : "Create"}
        </Button>
      </div>
    </form>
  );
}

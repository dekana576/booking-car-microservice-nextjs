"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text";
import { useCreateOrder } from "@/features/order/use-create-order";

export default function CreateOrderForm() {
  const { formik, isLoading } = useCreateOrder();

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Customer ID</label>
        <input
          type="number"
          name="customerId"
          onChange={formik.handleChange}
          value={formik.values.customerId}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter customer ID..."
        />
        {formik.touched.customerId && formik.errors.customerId && (
          <ErrorText message={formik.errors.customerId} />
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Pickup</label>
        <input
          type="text"
          name="pickup"
          onChange={formik.handleChange}
          value={formik.values.pickup}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter pickup location..."
        />
        {formik.touched.pickup && formik.errors.pickup && (
          <ErrorText message={formik.errors.pickup} />
        )}
      </div>
      <div>
        <label className="text-sm font-medium">Destination</label>
        <input
          type="text"
          name="destination"
          onChange={formik.handleChange}
          value={formik.values.destination}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter destination location..."
        />
        {formik.touched.destination && formik.errors.destination && (
          <ErrorText message={formik.errors.destination} />
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Create..." : "Create"}
        </Button>
      </div>
    </form>
  );
}

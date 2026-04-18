"use client";
import Button from "@/components/ui/button/button";
import { useUpdateOrder } from "@/features/order/use-update-user";
import {
  ORDER_STATUS_OPTIONS
} from "@/libs/constant/options";
import { IOrder } from "@/types/order.types";

interface IEditOrderFormProps {
  order: IOrder;
}

export default function EditOrderForm({ order }: IEditOrderFormProps) {
  const { formik, isLoading } = useUpdateOrder(order);

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Role</label>
        <select
          name="status"
          onChange={formik.handleChange}
          value={formik.values.status}
          className="w-full mt-1 p-1.5 border rounded"
        >
          {ORDER_STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </div>
    </form>
  );
}

"use client";
import EditOrderForm from "@/components/fragments/form/customer/edit-order-form";
import BackButton from "@/components/ui/button/back-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetOrderById } from "@/features/order/use-get-order-by-id";
import { useParams } from "next/navigation";

export default function EditOrderPage() {
  const { Id } = useParams<{ Id: string }>();

  const { data, isLoading, error } = useGetOrderById(Number(Id));

  console.log(Id);

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Edit Order</h2>

      <BackButton />

      {isLoading && (
        <div className="text-center">
          <SpinnerLoading />
        </div>
      )}

      {error && (
        <div className="text-center">
          <ErrorText message={error.message} />
        </div>
      )}

      {!isLoading && !error && data && (
        <EditOrderForm order={data} />
      )}
    </div>
  );
}

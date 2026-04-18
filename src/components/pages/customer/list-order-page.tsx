"use client";
import OrderCard from "@/components/fragments/card/customer/order-card";
import Button from "@/components/ui/button/button";
import LogoutButton from "@/components/ui/button/logout-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetOrderList } from "@/features/order/use-get-order-list";
import Link from "next/link";

export default function ListOrderPage() {

  const { data, isLoading, error } = useGetOrderList();

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">List Order</h2>

      <LogoutButton />

      <div className="flex justify-end items-center gap-2">
        <Link href="/customer/create">
          <Button className="bg-blue-500 w-fit h-fit text-end">
            Create Order
          </Button>
        </Link>
      </div>

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

      {!isLoading && !error && data?.length === 0 && (
        <div className="text-center">
          <ErrorText message="Order not found" />
        </div>
      )}

      {!isLoading && !error && data && (
        <div className="space-y-2 w-full">
          {data.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

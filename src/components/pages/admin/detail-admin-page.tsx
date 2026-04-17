"use client";
import UserDetailCard from "@/components/fragments/card/admin/user-detail-card";
import BackButton from "@/components/ui/button/back-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetUserById } from "@/features/user/use-get-user-by-id";
import { useParams } from "next/navigation";

export default function DetailUserPage() {
  const { Id } = useParams<{ Id: string }>();

  const { data, isLoading, error } = useGetUserById(Number(Id));

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Detail User</h2>

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
        <UserDetailCard user={data} />
      )}
    </div>
  );
}

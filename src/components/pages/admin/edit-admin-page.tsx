"use client";
import EditUserForm from "@/components/fragments/form/admin/edit-user-form";
import BackButton from "@/components/ui/button/back-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetUserById } from "@/features/admin/use-get-user-by-id";
import { useParams } from "next/navigation";

export default function EditUserPage() {
  const { Id } = useParams<{ Id: string }>();

  const { data, isLoading, error } = useGetUserById(Number(Id));

  console.log(Id);

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Edit User</h2>

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
        <EditUserForm user={data} />
      )}
    </div>
  );
}

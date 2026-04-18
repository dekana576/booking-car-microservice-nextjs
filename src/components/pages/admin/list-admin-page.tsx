"use client";
import UserCard from "@/components/fragments/card/admin/user-card";
import BackButton from "@/components/ui/button/back-button";
import Button from "@/components/ui/button/button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetUserList } from "@/features/user/use-get-user-list";
import Link from "next/link";
import { useState } from "react";

export default function ListUserPage() {
  const [search, setSearch] = useState<string>("");

  const { data, isLoading, error } = useGetUserList();

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">List User</h2>

      <BackButton />

      <div className="flex justify-end items-center gap-2">
        <Link href="/admin/create">
          <Button className="bg-blue-500 w-fit h-fit text-end">
            Create User
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
          <ErrorText message="User not found" />
        </div>
      )}

      {!isLoading && !error && data && (
        <div className="space-y-2 w-full">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

import { formatDate } from "@/libs/utils/format-date";
import { IUser } from "@/types/user.types";

interface IUserCardProps {
  user: IUser;
}

export default function UserDetailCard({ user }: IUserCardProps) {
  return (
    <div className="w-full border rounded-lg p-6 bg-white shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            user.role === "ADMIN"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.role}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p className="font-medium">{user.phone}</p>
        </div>

        <div>
          <p className="text-gray-500">Email:</p>
          <p className="font-medium">{user.email}</p>
        </div>

      </div>

      <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
        <p>Created At: {formatDate(user.createdAt)}</p>
      </div>
    </div>
  );
}
